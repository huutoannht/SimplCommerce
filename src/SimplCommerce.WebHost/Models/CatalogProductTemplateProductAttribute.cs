using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CatalogProductTemplateProductAttribute
    {
        public long ProductTemplateId { get; set; }
        public long ProductAttributeId { get; set; }

        public CatalogProductAttribute ProductAttribute { get; set; }
        public CatalogProductTemplate ProductTemplate { get; set; }
    }
}
