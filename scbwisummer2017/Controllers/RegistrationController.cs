using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using scbwisummer2017.Services;
using Microsoft.Extensions.Logging;
using Braintree;
using scbwisummer2017.Data;
using Microsoft.Extensions.Options;
using scbwisummer2017.Models.RegistrationViewModels;
using scbwisummer2017.Models.Data;

namespace scbwisummer2017.Controllers
{
    public class RegistrationController : ScbwiController
    {
        private readonly BraintreeGateway _gateway;
        private readonly ILogger _logger;
        private readonly IEmailSender _email;
        private readonly ITotalCalculator _calc;

        public RegistrationController(ApplicationDbContext db, ILoggerFactory factory, IOptions<Secrets> secrets, IEmailSender esvc, ITotalCalculator calc)
        {
            _db = db;
            _logger = factory.CreateLogger("All");
            _gateway = new BraintreeGateway(secrets.Value.paypaltoken);
            _email = esvc;
            _calc = calc;
        }

        [HttpPost]
        public IActionResult GetToken()
        {
            try
            {
                var token = _gateway.ClientToken.generate();

                return Success(data: token);
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"Failed to generate token! {ex.Message}");

                throw;
            }
        }

        public IActionResult Tracks() => Success(_db.Workshops.OrderBy(x => x.title).ToList());

        public IActionResult Comprehensives() => Success(_db.Comprehensives.OrderBy(x => x.title).ToList());

        public IActionResult Copy()
        {
            var copy = _db.Copy.ToList();

            return Success(new
            {
                frontpage = copy.SingleOrDefault(x => x.page == "frontpage")?.text,
                workshop = copy.SingleOrDefault(x => x.page == "workshop")?.text,
                comprehensive = copy.SingleOrDefault(x => x.page == "comprehensive")?.text,
                critique = copy.SingleOrDefault(x => x.page == "critique")?.text,
                latedate = _db.Dates.SingleOrDefault(x => x.name == "late")
            });
        }

        public IActionResult Prices()
        {
            var late = _db.Dates.SingleOrDefault(x => x.name == "late").value;
            var islate = late < DateTime.Now;
            var prices = _db.Prices.Where(x => x.late == islate).ToList();
            var m_workshop = prices.SingleOrDefault(x => x.member == true && x.type == "workshop")?.value ?? 0;
            var nm_workshop = prices.SingleOrDefault(x => x.member == false && x.type == "workshop")?.value ?? 0;
            var comprehensive = prices.SingleOrDefault(x => x.type == "comprehensive")?.value ?? 0;
            var critique = prices.SingleOrDefault(x => x.type == "critique")?.value ?? 0;

            var p = new Prices
            {
                workshop = new Dictionary<string, decimal> {
                    { "member", m_workshop },
                    { "nonmember", nm_workshop }
                },
                comprehensive = new Dictionary<string, decimal> {
                    { "member", comprehensive }
                },
                critique = new Dictionary<string, decimal> {
                    { "regular", critique }
                }
            };

            return Success(p);
        }

        public IActionResult CalcTotal([FromBody] RegistrationViewModel r)
        {
            if (!ModelState.IsValid)
            {
                return Failure("Whoops");
            }

            (var subtotal, var total) = _calc.CalcTotals(r, _db);

            return Success(new { subtotal = subtotal, total = total });
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] RegistrationViewModel r)
        {
            var reg = new Registration(r)
            {
                ismember = r.user.member,
                comprehensive = _db.Comprehensives.SingleOrDefault(x => x.id == r.comprehensive),
                coupon = _db.Coupons.SingleOrDefault(x => x.text == r.coupon),
                workshop = _db.Workshops.SingleOrDefault(x => x.id == r.track),
                portfolio = r.portfoliocritiques,
                manuscript = r.manuscriptcritiques
            };

            (var subtotal, var total) = _calc.CalcTotals(r, _db);

            reg.subtotal = subtotal;
            reg.total = total;

            var request = new TransactionRequest
            {
                Amount = total,
                MerchantAccountId = "USD",
                PaymentMethodNonce = r.nonce,
                Options = new TransactionOptionsRequest
                {
                    PayPal = new TransactionOptionsPayPalRequest
                    {
                        CustomField = reg.paypalid,
                        Description = "SCBWI Florida June 2017 Conference",
                    },
                    SubmitForSettlement = true
                }
            };

            var result = _gateway.Transaction.Sale(request);

            if (result.IsSuccess())
            {
                reg.paid = DateTime.Now;
                reg.submitted = DateTime.Now;
                reg.created = DateTime.Now;
                reg.modified = DateTime.Now;

                _db.Registrations.Add(reg);

                _db.SaveChanges();

                try
                {
                    var emailResp = await _email.SendEmailAsync(reg.user.Email, "Successful Registration", reg.GenEmail(), $"{reg.user.firstname} {reg.user.lastname}");

                    if (!emailResp.IsSuccessStatusCode)
                    {
                        var resp = await emailResp.Content.ReadAsStringAsync();

                        _logger.LogWarning($"Failed to send confirmation email to {reg.user.Email}. Reason: {resp}");
                    }
                }
                catch (Exception ex)
                {
                    _logger.LogWarning($"Failed to send confirmation email. Exception: {ex.Message}");
                }

                return Success();
            }

            return Failure("dunno!");
        }

        [HttpPost]
        public IActionResult RegisterDirect([FromBody] RegistrationViewModel r)
        {
            var reg = new Registration(r)
            {
                ismember = r.user.member,
                comprehensive = _db.Comprehensives.SingleOrDefault(x => x.id == r.comprehensive),
                coupon = _db.Coupons.SingleOrDefault(x => x.text == r.coupon),
                workshop = _db.Workshops.SingleOrDefault(x => x.id == r.track),
                portfolio = r.portfoliocritiques,
                manuscript = r.manuscriptcritiques
            };

            (var subtotal, var total) = _calc.CalcTotals(r, _db);

            reg.subtotal = subtotal;
            reg.total = 0m;
            reg.paid = DateTime.Now;
            reg.submitted = DateTime.Now;
            reg.created = DateTime.Now;
            reg.modified = DateTime.Now;

            _db.Registrations.Add(reg);

            _db.SaveChanges();

            return Success();
        }

        public IActionResult Email(RegistrationViewModel r)
        {
            return View();
        }
    }
}