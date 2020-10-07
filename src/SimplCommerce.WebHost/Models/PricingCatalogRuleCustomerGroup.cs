using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class PricingCatalogRuleCustomerGroup
    {
        public long CatalogRuleId { get; set; }
        public long CustomerGroupId { get; set; }

        public PricingCatalogRule CatalogRule { get; set; }
        public CoreCustomerGroup CustomerGroup { get; set; }
    }
}
