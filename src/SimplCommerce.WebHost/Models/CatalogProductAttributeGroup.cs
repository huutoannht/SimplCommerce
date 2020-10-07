using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CatalogProductAttributeGroup
    {
        public CatalogProductAttributeGroup()
        {
            CatalogProductAttribute = new HashSet<CatalogProductAttribute>();
        }

        public long Id { get; set; }
        public string Name { get; set; }

        public ICollection<CatalogProductAttribute> CatalogProductAttribute { get; set; }
    }
}
