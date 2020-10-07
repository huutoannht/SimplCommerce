using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class ShipmentsShipmentItem
    {
        public long Id { get; set; }
        public long ShipmentId { get; set; }
        public long OrderItemId { get; set; }
        public long ProductId { get; set; }
        public int Quantity { get; set; }

        public CatalogProduct Product { get; set; }
        public ShipmentsShipment Shipment { get; set; }
    }
}
