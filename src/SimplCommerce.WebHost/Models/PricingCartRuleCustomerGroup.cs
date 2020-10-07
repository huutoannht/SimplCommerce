using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class PricingCartRuleCustomerGroup
    {
        public long CartRuleId { get; set; }
        public long CustomerGroupId { get; set; }

        public PricingCartRule CartRule { get; set; }
        public CoreCustomerGroup CustomerGroup { get; set; }
    }
}
