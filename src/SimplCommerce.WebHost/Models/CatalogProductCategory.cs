using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CatalogProductCategory
    {
        public long Id { get; set; }
        public bool IsFeaturedProduct { get; set; }
        public int DisplayOrder { get; set; }
        public long CategoryId { get; set; }
        public long ProductId { get; set; }

        public CatalogCategory Category { get; set; }
        public CatalogProduct Product { get; set; }
    }
}
