using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CatalogProductLink
    {
        public long Id { get; set; }
        public long ProductId { get; set; }
        public long LinkedProductId { get; set; }
        public int LinkType { get; set; }

        public CatalogProduct LinkedProduct { get; set; }
        public CatalogProduct Product { get; set; }
    }
}
