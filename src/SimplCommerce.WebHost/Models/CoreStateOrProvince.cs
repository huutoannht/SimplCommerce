using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CoreStateOrProvince
    {
        public CoreStateOrProvince()
        {
            CoreAddress = new HashSet<CoreAddress>();
            CoreDistrict = new HashSet<CoreDistrict>();
            OrdersOrderAddress = new HashSet<OrdersOrderAddress>();
            ShippingTableRatePriceAndDestination = new HashSet<ShippingTableRatePriceAndDestination>();
            TaxTaxRate = new HashSet<TaxTaxRate>();
        }

        public long Id { get; set; }
        public string CountryId { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }

        public CoreCountry Country { get; set; }
        public ICollection<CoreAddress> CoreAddress { get; set; }
        public ICollection<CoreDistrict> CoreDistrict { get; set; }
        public ICollection<OrdersOrderAddress> OrdersOrderAddress { get; set; }
        public ICollection<ShippingTableRatePriceAndDestination> ShippingTableRatePriceAndDestination { get; set; }
        public ICollection<TaxTaxRate> TaxTaxRate { get; set; }
    }
}
