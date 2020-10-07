using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class WishListWishList
    {
        public WishListWishList()
        {
            WishListWishListItem = new HashSet<WishListWishListItem>();
        }

        public long Id { get; set; }
        public long UserId { get; set; }
        public string SharingCode { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public DateTimeOffset LatestUpdatedOn { get; set; }

        public CoreUser User { get; set; }
        public ICollection<WishListWishListItem> WishListWishListItem { get; set; }
    }
}
