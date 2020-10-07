using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class InventoryStock
    {
        public long Id { get; set; }
        public long ProductId { get; set; }
        public long WarehouseId { get; set; }
        public int Quantity { get; set; }
        public int ReservedQuantity { get; set; }

        public CatalogProduct Product { get; set; }
        public InventoryWarehouse Warehouse { get; set; }
    }
}
