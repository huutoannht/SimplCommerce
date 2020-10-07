using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class ShipmentsShipment
    {
        public ShipmentsShipment()
        {
            ShipmentsShipmentItem = new HashSet<ShipmentsShipmentItem>();
        }

        public long Id { get; set; }
        public long OrderId { get; set; }
        public string TrackingNumber { get; set; }
        public long WarehouseId { get; set; }
        public long CreatedById { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public DateTimeOffset LatestUpdatedOn { get; set; }
        public long? VendorId { get; set; }

        public CoreUser CreatedBy { get; set; }
        public OrdersOrder Order { get; set; }
        public InventoryWarehouse Warehouse { get; set; }
        public ICollection<ShipmentsShipmentItem> ShipmentsShipmentItem { get; set; }
    }
}
