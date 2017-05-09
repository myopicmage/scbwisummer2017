using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using scbwisummer2017.Data;
using scbwisummer2017.Models;
using scbwisummer2017.Services;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using scbwisummer2017.Models.Data;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using scbwisummer2017.Models.RegistrationViewModels;

namespace scbwisummer2017.Controllers
{
    [Authorize]
    public class AdminController : ScbwiController
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly ILogger _logger;
        private readonly IEmailSender _msgSender;
        private readonly ITotalCalculator _calc;

        public AdminController(ApplicationDbContext db, UserManager<ApplicationUser> um, RoleManager<IdentityRole> rm, ILoggerFactory f, IEmailSender esvc, ITotalCalculator calc)
        {
            _db = db;
            _userManager = um;
            _roleManager = rm;
            _logger = f.CreateLogger("All");
            _msgSender = esvc;
            _calc = calc;
        }

        public IActionResult Index() => View();

        public IActionResult Comprehensives() => Success(_db.Comprehensives.OrderBy(x => x.title).ToList());

        [HttpPost]
        public async Task<IActionResult> Comprehensives([FromBody] Comprehensive c)
        {
            if (!ModelState.IsValid)
            {
                return Failure("Invalid model");
            }

            c.created = DateTime.Now;
            c.modified = DateTime.Now;
            c.createdby = User.Identity.Name;
            c.modifiedby = User.Identity.Name;

            _db.Comprehensives.Add(c);

            return await Save();
        }

        public IActionResult Coupons() => Success(_db.Coupons.OrderBy(x => x.text).ToList());

        [HttpPost]
        public async Task<IActionResult> Coupons([FromBody] Coupon c)
        {
            if (!ModelState.IsValid)
            {
                return Failure("Invalid model");
            }

            c.created = DateTime.Now;
            c.modified = DateTime.Now;
            c.createdby = User.Identity.Name;
            c.modifiedby = User.Identity.Name;

            _db.Coupons.Add(c);

            return await Save();
        }

        public IActionResult Dates() => Success(_db.Dates.OrderBy(x => x.description).ToList());

        [HttpPost]
        public async Task<IActionResult> Dates([FromBody] DateTime d)
        {
            if (!ModelState.IsValid)
            {
                return Failure("Invalid model");
            }

            var late = _db.Dates.SingleOrDefault(x => x.description == "late");

            late.value = d;
            late.modified = DateTime.Now;
            late.modifiedby = User.Identity.Name;

            return await Save();
        }

        public IActionResult Prices() => Success(_db.Prices.OrderBy(x => x.type).ThenBy(x => x.member).ThenBy(x => x.late).ToList());

        [HttpPost]
        public async Task<IActionResult> Prices([FromBody] Price p)
        {
            if (!ModelState.IsValid)
            {
                return Failure("Invalid model");
            }

            p.created = DateTime.Now;
            p.modified = DateTime.Now;
            p.createdby = User.Identity.Name;
            p.modifiedby = User.Identity.Name;

            _db.Prices.Add(p);

            return await Save();
        }

        public IActionResult Registrations(int number)
        {
            var reg = _db.Registrations
                .Include(x => x.user)
                .Include(x => x.coupon)
                .Include(x => x.comprehensive)
                .Include(x => x.workshop)
                .OrderByDescending(x => x.created);

            if (number > 0)
            {
                return Success(reg.Take(number).ToList());
            }

            return Success(reg.ToList());
        }

        [Produces("text/csv")]
        public IActionResult GetCsv()
        {
            var reg = _db.Registrations
                .Include(x => x.user)
                .Include(x => x.coupon)
                .Include(x => x.comprehensive)
                .Include(x => x.workshop)
                .OrderByDescending(x => x.created)
                .Select(x => x.Flatten())
                .ToList();

            Response.Headers.Add("content-disposition", $"attachment; filename=registrations-{DateTime.Now:s}.csv");

            return Ok(reg);
        }

        public IActionResult Workshops() => Success(_db.Workshops.OrderBy(x => x.title).ToList());

        [HttpPost]
        public async Task<IActionResult> Workshops([FromBody] Workshop w)
        {
            if (!ModelState.IsValid)
            {
                return Failure("Invalid model");
            }

            w.created = DateTime.Now;
            w.modified = DateTime.Now;
            w.createdby = User.Identity.Name;
            w.modifiedby = User.Identity.Name;

            _db.Workshops.Add(w);

            return await Save();
        }

        public IActionResult Copy()
        {
            var copy = _db.Copy.ToList();

            return Success(new
            {
                frontpage = copy.SingleOrDefault(x => x.page == "frontpage")?.text,
                workshop = copy.SingleOrDefault(x => x.page == "workshop")?.text,
                comprehensive = copy.SingleOrDefault(x => x.page == "comprehensive")?.text,
                critique = copy.SingleOrDefault(x => x.page == "critique")?.text,
            });
        }

        [HttpPost]
        public IActionResult Register([FromBody] RegistrationViewModel r)
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
            reg.paid = DateTime.Now;
            reg.submitted = DateTime.Now;
            reg.created = DateTime.Now;
            reg.modified = DateTime.Now;

            _db.Registrations.Add(reg);

            _db.SaveChanges();

            return Success();
        }
    }
}