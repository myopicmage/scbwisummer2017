using scbwisummer2017.Data;
using scbwisummer2017.Models.Data;
using scbwisummer2017.Models.RegistrationViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace scbwisummer2017.Services
{
    public class TotalCalculator : ITotalCalculator
    {
        public (decimal subtotal, decimal total) CalcTotals(RegistrationViewModel r, ApplicationDbContext _db)
        {
            var subtotal = 0m;
            var total = 0.0m;
            var late = _db.Dates.SingleOrDefault(x => x.name == "late");

            subtotal += 50 * r.portfoliocritiques;
            subtotal += 50 * r.manuscriptcritiques;

            if (r.track > 0) {
                var w_price = _db.Prices.SingleOrDefault(x => x.member == r.user.member && x.late == (DateTime.Now > late.value) && x.type == "workshop");

                subtotal += w_price.value;
            }

            if (r.comprehensive > 0)
            {
                var c_price = _db.Prices.SingleOrDefault(x => x.late == (DateTime.Now > late.value) && x.type == "comprehensive");

                subtotal += c_price.value;
            }

            total = subtotal;

            if (!string.IsNullOrEmpty(r.coupon))
            {
                var coupon = _db.Coupons.SingleOrDefault(x => x.text == r.coupon);

                if (coupon != null)
                {
                    switch (coupon.type)
                    {
                        case CouponType.TotalCost:
                            total = Convert.ToDecimal(coupon.value);
                            break;
                        case CouponType.PercentOff:
                            var val = Convert.ToDecimal(coupon.value);
                            var mult = 100 - (val / 100);
                            total *= mult;
                            break;
                    }
                }
            }

            return (subtotal, total);
        }
    }

    public interface ITotalCalculator
    {
        (decimal subtotal, decimal total) CalcTotals(RegistrationViewModel r, ApplicationDbContext _db);
    }
}
