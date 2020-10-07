using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CoreEntityType
    {
        public CoreEntityType()
        {
            CoreEntity = new HashSet<CoreEntity>();
        }

        public string Id { get; set; }
        public bool IsMenuable { get; set; }
        public string RoutingController { get; set; }
        public string RoutingAction { get; set; }
        public string AreaName { get; set; }

        public ICollection<CoreEntity> CoreEntity { get; set; }
    }
}
