using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class PricingCartRuleCategory
    {
        public long CategoryId { get; set; }
        public long CartRuleId { get; set; }

        public PricingCartRule CartRule { get; set; }
        public CatalogCategory Category { get; set; }
    }
}
