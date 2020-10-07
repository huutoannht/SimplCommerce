using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class OrdersOrderAddress
    {
        public OrdersOrderAddress()
        {
            OrdersOrderBillingAddress = new HashSet<OrdersOrder>();
            OrdersOrderShippingAddress = new HashSet<OrdersOrder>();
        }

        public long Id { get; set; }
        public string ContactName { get; set; }
        public string Phone { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string City { get; set; }
        public string ZipCode { get; set; }
        public long? DistrictId { get; set; }
        public long StateOrProvinceId { get; set; }
        public string CountryId { get; set; }

        public CoreCountry Country { get; set; }
        public CoreDistrict District { get; set; }
        public CoreStateOrProvince StateOrProvince { get; set; }
        public ICollection<OrdersOrder> OrdersOrderBillingAddress { get; set; }
        public ICollection<OrdersOrder> OrdersOrderShippingAddress { get; set; }
    }
}
