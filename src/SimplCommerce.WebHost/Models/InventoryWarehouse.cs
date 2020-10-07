using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class InventoryWarehouse
    {
        public InventoryWarehouse()
        {
            InventoryStock = new HashSet<InventoryStock>();
            InventoryStockHistory = new HashSet<InventoryStockHistory>();
            ShipmentsShipment = new HashSet<ShipmentsShipment>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public long AddressId { get; set; }
        public long? VendorId { get; set; }

        public CoreAddress Address { get; set; }
        public CoreVendor Vendor { get; set; }
        public ICollection<InventoryStock> InventoryStock { get; set; }
        public ICollection<InventoryStockHistory> InventoryStockHistory { get; set; }
        public ICollection<ShipmentsShipment> ShipmentsShipment { get; set; }
    }
}
