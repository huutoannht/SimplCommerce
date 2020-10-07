using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class ProductRecentlyViewedRecentlyViewedProduct
    {
        public long Id { get; set; }
        public long UserId { get; set; }
        public long ProductId { get; set; }
        public DateTimeOffset LatestViewedOn { get; set; }
    }
}
