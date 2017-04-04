using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using scbwisummer2017.Models;
using scbwisummer2017.Models.Data;

namespace scbwisummer2017.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }

        public virtual DbSet<Comprehensive> Comprehensives { get; set; }
        public virtual DbSet<Coupon> Coupons { get; set; }
        public virtual DbSet<Critique> Critiques { get; set; }
        public virtual DbSet<Date> Dates { get; set; }
        public virtual DbSet<Price> Prices { get; set; }
        public virtual DbSet<Registration> Registrations { get; set; }
        public virtual DbSet<Workshop> Workshops { get; set; }
    }
}
