using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class PricingCartRuleUsage
    {
        public long Id { get; set; }
        public long CartRuleId { get; set; }
        public long? CouponId { get; set; }
        public long UserId { get; set; }
        public long OrderId { get; set; }
        public DateTimeOffset CreatedOn { get; set; }

        public PricingCartRule CartRule { get; set; }
        public PricingCoupon Coupon { get; set; }
        public CoreUser User { get; set; }
    }
}
