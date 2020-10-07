using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class ShippingTableRatePriceAndDestination
    {
        public long Id { get; set; }
        public string CountryId { get; set; }
        public long? StateOrProvinceId { get; set; }
        public long? DistrictId { get; set; }
        public string ZipCode { get; set; }
        public string Note { get; set; }
        public decimal MinOrderSubtotal { get; set; }
        public decimal ShippingPrice { get; set; }

        public CoreCountry Country { get; set; }
        public CoreDistrict District { get; set; }
        public CoreStateOrProvince StateOrProvince { get; set; }
    }
}
