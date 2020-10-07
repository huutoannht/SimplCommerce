using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class InventoryStockHistory
    {
        public long Id { get; set; }
        public long ProductId { get; set; }
        public long WarehouseId { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public long CreatedById { get; set; }
        public long AdjustedQuantity { get; set; }
        public string Note { get; set; }

        public CoreUser CreatedBy { get; set; }
        public CatalogProduct Product { get; set; }
        public InventoryWarehouse Warehouse { get; set; }
    }
}
