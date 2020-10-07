using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CatalogProductAttribute
    {
        public CatalogProductAttribute()
        {
            CatalogProductAttributeValue = new HashSet<CatalogProductAttributeValue>();
            CatalogProductTemplateProductAttribute = new HashSet<CatalogProductTemplateProductAttribute>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public long GroupId { get; set; }

        public CatalogProductAttributeGroup Group { get; set; }
        public ICollection<CatalogProductAttributeValue> CatalogProductAttributeValue { get; set; }
        public ICollection<CatalogProductTemplateProductAttribute> CatalogProductTemplateProductAttribute { get; set; }
    }
}
