using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CoreAddress
    {
        public CoreAddress()
        {
            CoreUserAddress = new HashSet<CoreUserAddress>();
            InventoryWarehouse = new HashSet<InventoryWarehouse>();
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
        public ICollection<CoreUserAddress> CoreUserAddress { get; set; }
        public ICollection<InventoryWarehouse> InventoryWarehouse { get; set; }
    }
}
