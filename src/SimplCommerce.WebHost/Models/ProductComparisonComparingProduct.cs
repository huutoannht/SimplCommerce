using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class ProductComparisonComparingProduct
    {
        public long Id { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public long UserId { get; set; }
        public long ProductId { get; set; }

        public CatalogProduct Product { get; set; }
        public CoreUser User { get; set; }
    }
}
