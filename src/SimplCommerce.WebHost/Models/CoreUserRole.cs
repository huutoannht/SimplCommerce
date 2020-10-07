using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CoreUserRole
    {
        public long UserId { get; set; }
        public long RoleId { get; set; }

        public CoreRole Role { get; set; }
        public CoreUser User { get; set; }
    }
}
