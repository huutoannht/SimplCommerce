using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class ShoppingCartCart
    {
        public ShoppingCartCart()
        {
            ShoppingCartCartItem = new HashSet<ShoppingCartCartItem>();
        }

        public long Id { get; set; }
        public long CustomerId { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public bool IsActive { get; set; }
        public string CouponCode { get; set; }
        public string CouponRuleName { get; set; }
        public string ShippingMethod { get; set; }
        public bool IsProductPriceIncludeTax { get; set; }
        public decimal? ShippingAmount { get; set; }
        public decimal? TaxAmount { get; set; }
        public string ShippingData { get; set; }
        public string OrderNote { get; set; }
        public DateTimeOffset LatestUpdatedOn { get; set; }
        public long CreatedById { get; set; }

        public CoreUser CreatedBy { get; set; }
        public CoreUser Customer { get; set; }
        public ICollection<ShoppingCartCartItem> ShoppingCartCartItem { get; set; }
    }
}
