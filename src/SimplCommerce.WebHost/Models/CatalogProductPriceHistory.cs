using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CatalogProductPriceHistory
    {
        public long Id { get; set; }
        public long? ProductId { get; set; }
        public long CreatedById { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public decimal? Price { get; set; }
        public decimal? OldPrice { get; set; }
        public decimal? SpecialPrice { get; set; }
        public DateTimeOffset? SpecialPriceStart { get; set; }
        public DateTimeOffset? SpecialPriceEnd { get; set; }

        public CoreUser CreatedBy { get; set; }
        public CatalogProduct Product { get; set; }
    }
}
