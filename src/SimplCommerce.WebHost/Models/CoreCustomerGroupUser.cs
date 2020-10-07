using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CoreCustomerGroupUser
    {
        public long UserId { get; set; }
        public long CustomerGroupId { get; set; }

        public CoreCustomerGroup CustomerGroup { get; set; }
        public CoreUser User { get; set; }
    }
}
