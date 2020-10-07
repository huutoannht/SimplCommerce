using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class WishListWishListItem
    {
        public long Id { get; set; }
        public long WishListId { get; set; }
        public long ProductId { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public DateTimeOffset LatestUpdatedOn { get; set; }

        public CatalogProduct Product { get; set; }
        public WishListWishList WishList { get; set; }
    }
}
