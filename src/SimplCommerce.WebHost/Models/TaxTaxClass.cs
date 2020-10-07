using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class TaxTaxClass
    {
        public TaxTaxClass()
        {
            CatalogProduct = new HashSet<CatalogProduct>();
            TaxTaxRate = new HashSet<TaxTaxRate>();
        }

        public long Id { get; set; }
        public string Name { get; set; }

        public ICollection<CatalogProduct> CatalogProduct { get; set; }
        public ICollection<TaxTaxRate> TaxTaxRate { get; set; }
    }
}
