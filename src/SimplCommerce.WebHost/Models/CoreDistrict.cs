using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CoreDistrict
    {
        public CoreDistrict()
        {
            CoreAddress = new HashSet<CoreAddress>();
            OrdersOrderAddress = new HashSet<OrdersOrderAddress>();
            ShippingTableRatePriceAndDestination = new HashSet<ShippingTableRatePriceAndDestination>();
        }

        public long Id { get; set; }
        public long StateOrProvinceId { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Location { get; set; }

        public CoreStateOrProvince StateOrProvince { get; set; }
        public ICollection<CoreAddress> CoreAddress { get; set; }
        public ICollection<OrdersOrderAddress> OrdersOrderAddress { get; set; }
        public ICollection<ShippingTableRatePriceAndDestination> ShippingTableRatePriceAndDestination { get; set; }
    }
}
