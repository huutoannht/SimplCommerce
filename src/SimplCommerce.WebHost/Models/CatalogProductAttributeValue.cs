using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CatalogProductAttributeValue
    {
        public long Id { get; set; }
        public long AttributeId { get; set; }
        public long ProductId { get; set; }
        public string Value { get; set; }

        public CatalogProductAttribute Attribute { get; set; }
        public CatalogProduct Product { get; set; }
    }
}
