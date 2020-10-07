using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CoreCustomerGroup
    {
        public CoreCustomerGroup()
        {
            CoreCustomerGroupUser = new HashSet<CoreCustomerGroupUser>();
            PricingCartRuleCustomerGroup = new HashSet<PricingCartRuleCustomerGroup>();
            PricingCatalogRuleCustomerGroup = new HashSet<PricingCatalogRuleCustomerGroup>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public DateTimeOffset LatestUpdatedOn { get; set; }

        public ICollection<CoreCustomerGroupUser> CoreCustomerGroupUser { get; set; }
        public ICollection<PricingCartRuleCustomerGroup> PricingCartRuleCustomerGroup { get; set; }
        public ICollection<PricingCatalogRuleCustomerGroup> PricingCatalogRuleCustomerGroup { get; set; }
    }
}
