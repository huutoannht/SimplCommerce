using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CatalogBrand
    {
        public CatalogBrand()
        {
            CatalogProduct = new HashSet<CatalogProduct>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public string Slug { get; set; }
        public string Description { get; set; }
        public bool IsPublished { get; set; }
        public bool IsDeleted { get; set; }
        public string MetaTitle { get; set; }
        public string MetaKeywords { get; set; }
        public string MetaDescription { get; set; }
        public int? DisplayOrder { get; set; }

        public ICollection<CatalogProduct> CatalogProduct { get; set; }
    }
}
