using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CoreCountry
    {
        public CoreCountry()
        {
            CoreAddress = new HashSet<CoreAddress>();
            CoreStateOrProvince = new HashSet<CoreStateOrProvince>();
            OrdersOrderAddress = new HashSet<OrdersOrderAddress>();
            ShippingTableRatePriceAndDestination = new HashSet<ShippingTableRatePriceAndDestination>();
            TaxTaxRate = new HashSet<TaxTaxRate>();
        }

        public string Id { get; set; }
        public string Name { get; set; }
        public string Code3 { get; set; }
        public bool IsBillingEnabled { get; set; }
        public bool IsShippingEnabled { get; set; }
        public bool IsCityEnabled { get; set; }
        public bool IsZipCodeEnabled { get; set; }
        public bool IsDistrictEnabled { get; set; }

        public ICollection<CoreAddress> CoreAddress { get; set; }
        public ICollection<CoreStateOrProvince> CoreStateOrProvince { get; set; }
        public ICollection<OrdersOrderAddress> OrdersOrderAddress { get; set; }
        public ICollection<ShippingTableRatePriceAndDestination> ShippingTableRatePriceAndDestination { get; set; }
        public ICollection<TaxTaxRate> TaxTaxRate { get; set; }
    }
}
