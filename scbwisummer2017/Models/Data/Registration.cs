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

            user.address1 = r.user.address1;
            user.address2 = r.user.address2;
            user.city = r.user.city;
            user.Email = r.user.email;
            user.phone = r.user.phone;
            user.state = r.user.province;
            user.postalcode = r.user.postal;
            user.UserName = r.user.email;
        }
    }
}
