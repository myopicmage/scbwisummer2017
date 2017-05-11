using Microsoft.Extensions.Options;
using scbwisummer2017.Models.Data;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace scbwisummer2017.Services
{
    // This class is used by the application to send Email and SMS
    // when you turn on two-factor authentication in ASP.NET Identity.
    // For more details see this link http://go.microsoft.com/fwlink/?LinkID=532713
    public class AuthMessageSender : IEmailSender, ISmsSender
    {
        private readonly ILogger _logger;

        public AuthMessageSender(IOptions<Secrets> secrets, IOptions<EmailOptions> emailopts, ILoggerFactory factory)
        {
            Options = secrets.Value;
            EmailOpts = emailopts.Value;
            _logger = factory.CreateLogger("All");

            support_email = new EmailAddress(EmailOpts.supportemail, EmailOpts.supportemailname);
        }

        public Secrets Options { get; } //set only via Secret Manager
        public EmailOptions EmailOpts { get; }

        private readonly EmailAddress support_email;

        public Task SendEmailAsync(string email, string subject, string message)
        {
            return Task.FromResult(0);
        }

        public Task<HttpResponseMessage> SendEmailAsync(string email, string subject, string message, string name)
        {
            var client = new HttpClient();

            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("BEARER", Options.sendgridkey);

            var payload = new SendGridEmail
            {
                content = new List<EmailMessage>
                {
                    new EmailMessage("text/html", message)
                },
                personalizations = new List<Personalization>
                {
                    new Personalization
                    {
                        to = new [] { new EmailAddress(email, name) },
                        subject = subject
                    }
                },
                from = new EmailAddress("register@scbwiflorida.com", "SCBWI Florida Registration Bot"),
                reply_to = support_email
            };

            if (EmailOpts.ccra || EmailOpts.sendtoself) 
            {
                payload.personalizations.First().bcc = new List<EmailAddress>();
            }

            if (EmailOpts.ccra)
            {
                payload.personalizations.First().bcc.Add(support_email);
            }

            if (EmailOpts.sendtoself)
            {
                payload.personalizations.First().bcc.Add(new EmailAddress(EmailOpts.self, ""));
            }

            var payloadAsJson = JsonConvert.SerializeObject(payload);

            _logger.LogInformation($"Sending email: {payloadAsJson}");

            return client.PostAsJsonAsync("https://api.sendgrid.com/v3/mail/send", payload);
        }

        public Task SendSmsAsync(string number, string message)
        {
            // Plug in your SMS service here to send a text message.
            return Task.FromResult(0);
        }
    }
}
