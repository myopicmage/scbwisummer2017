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
        public virtual ICollection<Critique> critiques { get; set; }
        public virtual Coupon coupon { get; set; }
        public string paypalid { get; set; }
        public DateTime submitted { get; set; }
        public DateTime paid { get; set; }

        public Registration() { }

        public Registration(RegistrationViewModel r)
        {
            user = new ApplicationUser();

            user.firstname = r.user.first;
            user.lastname = r.user.last;
            user.phone = r.user.phone;
            user.postalcode = r.user.zip;
            user.address1 = r.user.address1;
            user.address2 = r.user.address2;
            user.city = r.user.city;
            user.Email = r.user.email;
            user.UserName = r.user.email;
            user.state = r.user.state;
        }
    }
}
