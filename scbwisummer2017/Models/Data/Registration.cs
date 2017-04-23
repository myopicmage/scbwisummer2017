using scbwisummer2017.Models.RegistrationViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace scbwisummer2017.Models.Data
{
    public class Registration : Common
    {
        public bool ismember { get; set; }
        public virtual ApplicationUser user { get; set; }
        public virtual Comprehensive comprehensive { get; set; }
        public virtual Workshop workshop { get; set; }
        public virtual Coupon coupon { get; set; }
        public int portfolio { get; set; }
        public int manuscript { get; set; }
        public string paypalid { get; set; }
        public DateTime submitted { get; set; }
        public DateTime paid { get; set; }
        public decimal subtotal { get; set; }
        public decimal total { get; set; }

        public Registration() { }

        public Registration(RegistrationViewModel r)
        {
            user = new ApplicationUser();

            user.firstname = r.user.firstname;
            user.lastname = r.user.lastname;
            user.address1 = r.user.address1;
            user.address2 = r.user.address2;
            user.city = r.user.city;
            user.Email = r.user.email;
            user.phone = r.user.phone;
            user.state = r.user.province;
            user.postalcode = r.user.postal;
            user.UserName = r.user.email;
        }

        public FlatRegistration Flatten() => new FlatRegistration {
            firstname = this.user.firstname,
            lastname = this.user.lastname,
            address1 = this.user.address1,
            address2 = this.user.address2,
            city = this.user.city,
            state = this.user.state,
            postalcode = this.user.postalcode,
            phone = this.user.phone,
            Email = this.user.Email,
            ismember = this.ismember ? "Yes" : "No",
            comprehensive = this.comprehensive?.title ?? "None",
            workshop = this.workshop?.title ?? "None",
            coupon = this.coupon?.text ?? "None",
            portfolio = this.portfolio,
            manuscript = this.manuscript,
            submitted = this.submitted,
            paid = this.paid,
            subtotal = this.subtotal,
            total = this.total
        };
    }

    public class FlatRegistration {
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string address1 { get; set; }
        public string address2 { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string postalcode { get; set; }
        public string phone { get; set; }
        public string Email { get; set; }
        public string ismember { get; set; }
        public string comprehensive { get; set; }
        public string workshop { get; set; }
        public string coupon { get; set; }
        public int portfolio { get; set; }
        public int manuscript { get; set; }
        public DateTime submitted { get; set; }
        public DateTime paid { get; set; }
        public decimal subtotal { get; set; }
        public decimal total { get; set; }
    }
}
