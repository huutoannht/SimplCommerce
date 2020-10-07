using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class ActivityLogActivity
    {
        public long Id { get; set; }
        public long ActivityTypeId { get; set; }
        public long UserId { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public long EntityId { get; set; }
        public string EntityTypeId { get; set; }

        public ActivityLogActivityType ActivityType { get; set; }
    }
}
