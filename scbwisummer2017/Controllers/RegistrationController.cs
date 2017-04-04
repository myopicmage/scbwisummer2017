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

namespace scbwisummer2017.Controllers
{
    public class RegistrationController : ScbwiController
    {
        private readonly ApplicationDbContext _db;
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
    }
}