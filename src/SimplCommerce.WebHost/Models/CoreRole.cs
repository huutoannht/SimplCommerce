using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CoreRole
    {
        public CoreRole()
        {
            CoreRoleClaim = new HashSet<CoreRoleClaim>();
            CoreUserRole = new HashSet<CoreUserRole>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public string NormalizedName { get; set; }
        public string ConcurrencyStamp { get; set; }

        public ICollection<CoreRoleClaim> CoreRoleClaim { get; set; }
        public ICollection<CoreUserRole> CoreUserRole { get; set; }
    }
}
