using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CoreWidget
    {
        public CoreWidget()
        {
            CoreWidgetInstance = new HashSet<CoreWidgetInstance>();
        }

        public string Id { get; set; }
        public string Name { get; set; }
        public string ViewComponentName { get; set; }
        public string CreateUrl { get; set; }
        public string EditUrl { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public bool IsPublished { get; set; }

        public ICollection<CoreWidgetInstance> CoreWidgetInstance { get; set; }
    }
}
