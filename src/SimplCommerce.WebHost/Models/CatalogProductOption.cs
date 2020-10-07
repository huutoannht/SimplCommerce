using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CatalogProductOption
    {
        public CatalogProductOption()
        {
            CatalogProductOptionCombination = new HashSet<CatalogProductOptionCombination>();
            CatalogProductOptionValue = new HashSet<CatalogProductOptionValue>();
        }

        public long Id { get; set; }
        public string Name { get; set; }

        public ICollection<CatalogProductOptionCombination> CatalogProductOptionCombination { get; set; }
        public ICollection<CatalogProductOptionValue> CatalogProductOptionValue { get; set; }
    }
}
