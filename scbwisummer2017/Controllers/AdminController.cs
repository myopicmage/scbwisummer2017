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

namespace scbwisummer2017.Controllers
{
    public class AdminController : ScbwiController
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly ILogger _logger;
        private readonly IEmailSender _msgSender;

        public AdminController(ApplicationDbContext db, UserManager<ApplicationUser> um, RoleManager<IdentityRole> rm, ILoggerFactory f, IEmailSender esvc)
        {
            _db = db;
            _userManager = um;
            _roleManager = rm;
            _logger = f.CreateLogger("All");
            _msgSender = esvc;
        }

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

        public IActionResult Registrations() => Json(_db.Registrations.OrderByDescending(x => x.created).ToList());
        public IActionResult Workshops() => Json(_db.Workshops.OrderBy(x => x.title).ToList());

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

            return await Save();
        }
    }
}