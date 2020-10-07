using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CatalogProductMedia
    {
        public long Id { get; set; }
        public long ProductId { get; set; }
        public long MediaId { get; set; }
        public int DisplayOrder { get; set; }

        public CoreMedia Media { get; set; }
        public CatalogProduct Product { get; set; }
    }
}
