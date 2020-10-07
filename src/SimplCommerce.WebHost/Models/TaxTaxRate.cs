using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class TaxTaxRate
    {
        public long Id { get; set; }
        public long TaxClassId { get; set; }
        public string CountryId { get; set; }
        public long? StateOrProvinceId { get; set; }
        public decimal Rate { get; set; }
        public string ZipCode { get; set; }

        public CoreCountry Country { get; set; }
        public CoreStateOrProvince StateOrProvince { get; set; }
        public TaxTaxClass TaxClass { get; set; }
    }
}
