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

        public FlatRegistration Flatten() => new FlatRegistration
        {
            firstname = user.firstname,
            lastname = user.lastname,
            address1 = user.address1,
            address2 = user.address2,
            city = user.city,
            state = user.state,
            postalcode = user.postalcode,
            phone = user.phone,
            Email = user.Email,
            ismember = ismember ? "Yes" : "No",
            comprehensive = comprehensive?.title ?? "None",
            workshop = workshop?.title ?? "None",
            coupon = coupon?.text ?? "None",
            portfolio = portfolio,
            manuscript = manuscript,
            submitted = submitted,
            paid = paid,
            subtotal = subtotal,
            total = total
        };

        public string GenEmail()
        {
            var flat = Flatten();

            var email = $@"<h3>Congratulations! We have received your registration.</h3>
<p>If you have any questions, please don't hesitate to contact us at <a href='mailto:florida-ra@scbwi.org'>florida-ra@scbwi.org</a></p>
<p>For your records, here what you requested:</p>
<table>
    <tbody>
        <tr>
            <td><b>Name</b></td>
            <td>{flat.firstname} {flat.lastname}</td>
        </tr>
        <tr>
            <td><b>Address</b></td>
            <td>
                {flat.address1}<br /> {flat.address2}
                <br /> {flat.city}, {flat.state} {flat.postalcode}<br />
            </td>
        </tr>
        <tr>
            <td><b>Email:</b></td>
            <td>{flat.Email}</td>
        </tr>
        <tr>
            <td><b>Phone:</b></td>
            <td>{flat.phone}</td>
        </tr>
        <tr>
            <td><b>Workshop Chosen:</b></td>
            <td>
                {flat.workshop}
            </td>
        </tr>
        <tr>
            <td><b>Comprehensive Chosen:</b></td>
            <td>{flat.comprehensive}</td>
        </tr>
        <tr>
            <td><b>Critiques requested:</b></td>
            <td>
                Manuscript: {flat.manuscript}<br /> Portfolio: {flat.portfolio}<br />
            </td>
        </tr>
        <tr>
            <td><b>Coupon Used:</b></td>
            <td>{flat.coupon}</td>
        </tr>
        <tr>
            <td><b>Subtotal:</b></td>
            <td>{flat.subtotal}</td>
        </tr>
        <tr>
            <td><b>Total:</b></td>
            <td>{flat.total}</td>
        </tr>
    </tbody>
</table>";

            return email;
        }
    }

    public class FlatRegistration
    {
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
