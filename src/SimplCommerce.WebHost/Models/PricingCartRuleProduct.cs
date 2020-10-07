using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class PricingCartRuleProduct
    {
        public long ProductId { get; set; }
        public long CartRuleId { get; set; }

        public PricingCartRule CartRule { get; set; }
        public CatalogProduct Product { get; set; }
    }
}
