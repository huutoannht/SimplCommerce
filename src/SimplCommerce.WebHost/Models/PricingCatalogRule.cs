using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class PricingCatalogRule
    {
        public PricingCatalogRule()
        {
            PricingCatalogRuleCustomerGroup = new HashSet<PricingCatalogRuleCustomerGroup>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public DateTimeOffset? StartOn { get; set; }
        public DateTimeOffset? EndOn { get; set; }
        public string RuleToApply { get; set; }
        public decimal DiscountAmount { get; set; }
        public decimal? MaxDiscountAmount { get; set; }

        public ICollection<PricingCatalogRuleCustomerGroup> PricingCatalogRuleCustomerGroup { get; set; }
    }
}
