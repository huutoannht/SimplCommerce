using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CoreWidgetZone
    {
        public CoreWidgetZone()
        {
            CoreWidgetInstance = new HashSet<CoreWidgetInstance>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool? IsPublished { get; set; }

        public ICollection<CoreWidgetInstance> CoreWidgetInstance { get; set; }
    }
}
