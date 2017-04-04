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

namespace scbwisummer2017.Controllers
{
    public class RegistrationController : ScbwiController
    {
        private readonly BraintreeGateway _gateway;
        private readonly ILogger _logger;
        private readonly IEmailSender _email;

        public RegistrationController(ApplicationDbContext db, ILoggerFactory factory, IOptions<Secrets> secrets, IEmailSender esvc)
        {
            _db = db;
            _logger = factory.CreateLogger("All");
            _gateway = new BraintreeGateway(secrets.Value.paypaltoken);
            _email = esvc;
        }

        public IActionResult GetToken()
        {
            try
            {
                var token = _gateway.ClientToken.generate();

                return Json(token);
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"Failed to generate token! {ex.Message}");

                throw;
            }
        }

        public IActionResult Tracks() => Success(_db.Workshops.OrderBy(x => x.title).ToList());

        public IActionResult Comprehensives() => Success(_db.Comprehensives.OrderBy(x => x.title).ToList());

        public IActionResult Copy() {
            var copy = _db.Copy.ToList();

            return Success(new {
                frontpage = copy.SingleOrDefault(x => x.page == "frontpage")?.text,
                workshop = copy.SingleOrDefault(x => x.page == "workshop")?.text,
                comprehensive = copy.SingleOrDefault(x => x.page == "comprehensive")?.text,
                critique = copy.SingleOrDefault(x => x.page == "critique")?.text,
                latedate = _db.Dates.SingleOrDefault(x => x.name == "late")
            });
        }

        public IActionResult Prices() {
            var late = _db.Dates.SingleOrDefault(x => x.name == "late").value;
            var islate = late < DateTime.Now;
            var prices = _db.Prices.Where(x => x.late == islate).ToList();
            var m_workshop = prices.SingleOrDefault(x => x.member == true && x.type == "workshop")?.value ?? 0;
            var nm_workshop = prices.SingleOrDefault(x => x.member == false && x.type == "workshop")?.value ?? 0;
            var comprehensive = prices.SingleOrDefault(x => x.type == "comprehensive")?.value ?? 0;
            var critique = prices.SingleOrDefault(x => x.type == "critique")?.value ?? 0;

            var p = new Prices {
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
    }
}