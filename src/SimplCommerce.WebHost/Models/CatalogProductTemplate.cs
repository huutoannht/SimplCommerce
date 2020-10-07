using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CatalogProductTemplate
    {
        public CatalogProductTemplate()
        {
            CatalogProductTemplateProductAttribute = new HashSet<CatalogProductTemplateProductAttribute>();
        }

        public long Id { get; set; }
        public string Name { get; set; }

        public ICollection<CatalogProductTemplateProductAttribute> CatalogProductTemplateProductAttribute { get; set; }
    }
}
