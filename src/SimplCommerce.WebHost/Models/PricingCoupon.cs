using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class PricingCoupon
    {
        public PricingCoupon()
        {
            PricingCartRuleUsage = new HashSet<PricingCartRuleUsage>();
        }

        public long Id { get; set; }
        public long CartRuleId { get; set; }
        public string Code { get; set; }
        public DateTimeOffset CreatedOn { get; set; }

        public PricingCartRule CartRule { get; set; }
        public ICollection<PricingCartRuleUsage> PricingCartRuleUsage { get; set; }
    }
}
