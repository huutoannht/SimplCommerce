using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class ActivityLogActivityType
    {
        public ActivityLogActivityType()
        {
            ActivityLogActivity = new HashSet<ActivityLogActivity>();
        }

        public long Id { get; set; }
        public string Name { get; set; }

        public ICollection<ActivityLogActivity> ActivityLogActivity { get; set; }
    }
}
