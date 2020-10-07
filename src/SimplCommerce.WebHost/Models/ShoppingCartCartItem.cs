using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class ShoppingCartCartItem
    {
        public long Id { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public long ProductId { get; set; }
        public int Quantity { get; set; }
        public long CartId { get; set; }

        public ShoppingCartCart Cart { get; set; }
        public CatalogProduct Product { get; set; }
    }
}
