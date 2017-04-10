using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using scbwisummer2017.Data;
using scbwisummer2017.Models.Data;

namespace scbwisummer2017.Data.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1");

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("scbwisummer2017.Models.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.Property<string>("address1");

                    b.Property<string>("address2");

                    b.Property<string>("city");

                    b.Property<string>("firstname");

                    b.Property<string>("lastname");

                    b.Property<string>("phone");

                    b.Property<string>("postalcode");

                    b.Property<string>("state");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("scbwisummer2017.Models.Data.Comprehensive", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("created");

                    b.Property<string>("createdby");

                    b.Property<string>("description");

                    b.Property<int>("maxattendees");

                    b.Property<DateTime>("modified");

                    b.Property<string>("modifiedby");

                    b.Property<string>("presenters");

                    b.Property<string>("title");

                    b.HasKey("id");

                    b.ToTable("Comprehensives");
                });

            modelBuilder.Entity("scbwisummer2017.Models.Data.Copy", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("created");

                    b.Property<string>("createdby");

                    b.Property<DateTime>("modified");

                    b.Property<string>("modifiedby");

                    b.Property<string>("page");

                    b.Property<string>("text");

                    b.HasKey("id");

                    b.ToTable("Copy");
                });

            modelBuilder.Entity("scbwisummer2017.Models.Data.Coupon", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("created");

                    b.Property<string>("createdby");

                    b.Property<DateTime>("modified");

                    b.Property<string>("modifiedby");

                    b.Property<string>("text");

                    b.Property<int>("type");

                    b.Property<int>("validuses");

                    b.Property<string>("value");

                    b.HasKey("id");

                    b.ToTable("Coupons");
                });

            modelBuilder.Entity("scbwisummer2017.Models.Data.Critique", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("created");

                    b.Property<string>("createdby");

                    b.Property<DateTime>("modified");

                    b.Property<string>("modifiedby");

                    b.Property<string>("path");

                    b.Property<int?>("registrationid");

                    b.Property<int>("type");

                    b.HasKey("id");

                    b.HasIndex("registrationid");

                    b.ToTable("Critiques");
                });

            modelBuilder.Entity("scbwisummer2017.Models.Data.Date", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("created");

                    b.Property<string>("createdby");

                    b.Property<string>("description");

                    b.Property<DateTime>("modified");

                    b.Property<string>("modifiedby");

                    b.Property<string>("name");

                    b.Property<DateTime>("value");

                    b.HasKey("id");

                    b.ToTable("Dates");
                });

            modelBuilder.Entity("scbwisummer2017.Models.Data.Price", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("created");

                    b.Property<string>("createdby");

                    b.Property<bool>("late");

                    b.Property<bool>("member");

                    b.Property<DateTime>("modified");

                    b.Property<string>("modifiedby");

                    b.Property<string>("type");

                    b.Property<decimal>("value");

                    b.HasKey("id");

                    b.ToTable("Prices");
                });

            modelBuilder.Entity("scbwisummer2017.Models.Data.Registration", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("comprehensiveid");

                    b.Property<int?>("couponid");

                    b.Property<DateTime>("created");

                    b.Property<string>("createdby");

                    b.Property<bool>("ismember");

                    b.Property<int>("manuscript");

                    b.Property<DateTime>("modified");

                    b.Property<string>("modifiedby");

                    b.Property<DateTime>("paid");

                    b.Property<string>("paypalid");

                    b.Property<int>("portfolio");

                    b.Property<DateTime>("submitted");

                    b.Property<decimal>("subtotal");

                    b.Property<decimal>("total");

                    b.Property<string>("userId");

                    b.Property<int?>("workshopid");

                    b.HasKey("id");

                    b.HasIndex("comprehensiveid");

                    b.HasIndex("couponid");

                    b.HasIndex("userId");

                    b.HasIndex("workshopid");

                    b.ToTable("Registrations");
                });

            modelBuilder.Entity("scbwisummer2017.Models.Data.Workshop", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("created");

                    b.Property<string>("createdby");

                    b.Property<string>("description");

                    b.Property<int>("maxattendees");

                    b.Property<DateTime>("modified");

                    b.Property<string>("modifiedby");

                    b.Property<string>("presenters");

                    b.Property<string>("title");

                    b.HasKey("id");

                    b.ToTable("Workshops");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRole")
                        .WithMany("Claims")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("scbwisummer2017.Models.ApplicationUser")
                        .WithMany("Claims")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("scbwisummer2017.Models.ApplicationUser")
                        .WithMany("Logins")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityRole")
                        .WithMany("Users")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("scbwisummer2017.Models.ApplicationUser")
                        .WithMany("Roles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("scbwisummer2017.Models.Data.Critique", b =>
                {
                    b.HasOne("scbwisummer2017.Models.Data.Registration", "registration")
                        .WithMany()
                        .HasForeignKey("registrationid");
                });

            modelBuilder.Entity("scbwisummer2017.Models.Data.Registration", b =>
                {
                    b.HasOne("scbwisummer2017.Models.Data.Comprehensive", "comprehensive")
                        .WithMany()
                        .HasForeignKey("comprehensiveid");

                    b.HasOne("scbwisummer2017.Models.Data.Coupon", "coupon")
                        .WithMany("users")
                        .HasForeignKey("couponid");

                    b.HasOne("scbwisummer2017.Models.ApplicationUser", "user")
                        .WithMany()
                        .HasForeignKey("userId");

                    b.HasOne("scbwisummer2017.Models.Data.Workshop", "workshop")
                        .WithMany()
                        .HasForeignKey("workshopid");
                });
        }
    }
}
