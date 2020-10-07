using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CoreUserAddress
    {
        public CoreUserAddress()
        {
            CoreUserDefaultBillingAddress = new HashSet<CoreUser>();
            CoreUserDefaultShippingAddress = new HashSet<CoreUser>();
        }

        public long Id { get; set; }
        public long UserId { get; set; }
        public long AddressId { get; set; }
        public int AddressType { get; set; }
        public DateTimeOffset? LastUsedOn { get; set; }

        public CoreAddress Address { get; set; }
        public CoreUser User { get; set; }
        public ICollection<CoreUser> CoreUserDefaultBillingAddress { get; set; }
        public ICollection<CoreUser> CoreUserDefaultShippingAddress { get; set; }
    }
}
