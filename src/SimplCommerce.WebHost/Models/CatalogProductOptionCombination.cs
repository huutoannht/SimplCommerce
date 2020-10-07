using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CatalogProductOptionCombination
    {
        public long Id { get; set; }
        public long ProductId { get; set; }
        public long OptionId { get; set; }
        public string Value { get; set; }
        public int SortIndex { get; set; }

        public CatalogProductOption Option { get; set; }
        public CatalogProduct Product { get; set; }
    }
}
