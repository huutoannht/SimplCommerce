using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CoreWidgetInstance
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public DateTimeOffset LatestUpdatedOn { get; set; }
        public DateTimeOffset? PublishStart { get; set; }
        public DateTimeOffset? PublishEnd { get; set; }
        public string WidgetId { get; set; }
        public long WidgetZoneId { get; set; }
        public int DisplayOrder { get; set; }
        public string Data { get; set; }
        public string HtmlData { get; set; }

        public CoreWidget Widget { get; set; }
        public CoreWidgetZone WidgetZone { get; set; }
    }
}
