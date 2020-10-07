using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CatalogCategory
    {
        public CatalogCategory()
        {
            CatalogProductCategory = new HashSet<CatalogProductCategory>();
            InverseParent = new HashSet<CatalogCategory>();
            PricingCartRuleCategory = new HashSet<PricingCartRuleCategory>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public string Slug { get; set; }
        public string MetaTitle { get; set; }
        public string MetaKeywords { get; set; }
        public string MetaDescription { get; set; }
        public string Icon { get; set; }
        public string Description { get; set; }
        public int DisplayOrder { get; set; }
        public bool IsPublished { get; set; }
        public bool IncludeInMenu { get; set; }
        public bool IsDeleted { get; set; }
        public long? ParentId { get; set; }
        public long? ThumbnailImageId { get; set; }

        public CatalogCategory Parent { get; set; }
        public CoreMedia ThumbnailImage { get; set; }
        public ICollection<CatalogProductCategory> CatalogProductCategory { get; set; }
        public ICollection<CatalogCategory> InverseParent { get; set; }
        public ICollection<PricingCartRuleCategory> PricingCartRuleCategory { get; set; }
    }
}
