using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CoreVendor
    {
        public CoreVendor()
        {
            CoreUser = new HashSet<CoreUser>();
            InventoryWarehouse = new HashSet<InventoryWarehouse>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public string Slug { get; set; }
        public string Description { get; set; }
        public string Email { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public DateTimeOffset LatestUpdatedOn { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }

        public ICollection<CoreUser> CoreUser { get; set; }
        public ICollection<InventoryWarehouse> InventoryWarehouse { get; set; }
    }
}
