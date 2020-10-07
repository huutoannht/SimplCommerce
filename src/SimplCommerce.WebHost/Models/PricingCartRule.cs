using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class PricingCartRule
    {
        public PricingCartRule()
        {
            PricingCartRuleCategory = new HashSet<PricingCartRuleCategory>();
            PricingCartRuleCustomerGroup = new HashSet<PricingCartRuleCustomerGroup>();
            PricingCartRuleProduct = new HashSet<PricingCartRuleProduct>();
            PricingCartRuleUsage = new HashSet<PricingCartRuleUsage>();
            PricingCoupon = new HashSet<PricingCoupon>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public DateTimeOffset? StartOn { get; set; }
        public DateTimeOffset? EndOn { get; set; }
        public bool IsCouponRequired { get; set; }
        public string RuleToApply { get; set; }
        public decimal DiscountAmount { get; set; }
        public decimal? MaxDiscountAmount { get; set; }
        public int? DiscountStep { get; set; }
        public int? UsageLimitPerCoupon { get; set; }
        public int? UsageLimitPerCustomer { get; set; }

        public ICollection<PricingCartRuleCategory> PricingCartRuleCategory { get; set; }
        public ICollection<PricingCartRuleCustomerGroup> PricingCartRuleCustomerGroup { get; set; }
        public ICollection<PricingCartRuleProduct> PricingCartRuleProduct { get; set; }
        public ICollection<PricingCartRuleUsage> PricingCartRuleUsage { get; set; }
        public ICollection<PricingCoupon> PricingCoupon { get; set; }
    }
}
