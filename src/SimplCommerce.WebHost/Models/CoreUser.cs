using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CoreUser
    {
        public CoreUser()
        {
            CatalogProductCreatedBy = new HashSet<CatalogProduct>();
            CatalogProductLatestUpdatedBy = new HashSet<CatalogProduct>();
            CatalogProductPriceHistory = new HashSet<CatalogProductPriceHistory>();
            CmsPageCreatedBy = new HashSet<CmsPage>();
            CmsPageLatestUpdatedBy = new HashSet<CmsPage>();
            CommentsComment = new HashSet<CommentsComment>();
            CoreCustomerGroupUser = new HashSet<CoreCustomerGroupUser>();
            CoreUserAddress = new HashSet<CoreUserAddress>();
            CoreUserClaim = new HashSet<CoreUserClaim>();
            CoreUserLogin = new HashSet<CoreUserLogin>();
            CoreUserRole = new HashSet<CoreUserRole>();
            CoreUserToken = new HashSet<CoreUserToken>();
            InventoryStockHistory = new HashSet<InventoryStockHistory>();
            NewsNewsItemCreatedBy = new HashSet<NewsNewsItem>();
            NewsNewsItemLatestUpdatedBy = new HashSet<NewsNewsItem>();
            OrdersOrderCreatedBy = new HashSet<OrdersOrder>();
            OrdersOrderCustomer = new HashSet<OrdersOrder>();
            OrdersOrderHistory = new HashSet<OrdersOrderHistory>();
            OrdersOrderLatestUpdatedBy = new HashSet<OrdersOrder>();
            PricingCartRuleUsage = new HashSet<PricingCartRuleUsage>();
            ProductComparisonComparingProduct = new HashSet<ProductComparisonComparingProduct>();
            ReviewsReply = new HashSet<ReviewsReply>();
            ReviewsReview = new HashSet<ReviewsReview>();
            ShipmentsShipment = new HashSet<ShipmentsShipment>();
            ShoppingCartCartCreatedBy = new HashSet<ShoppingCartCart>();
            ShoppingCartCartCustomer = new HashSet<ShoppingCartCart>();
            WishListWishList = new HashSet<WishListWishList>();
        }

        public int AccessFailedCount { get; set; }
        public bool EmailConfirmed { get; set; }
        public long Id { get; set; }
        public bool LockoutEnabled { get; set; }
        public DateTimeOffset? LockoutEnd { get; set; }
        public bool PhoneNumberConfirmed { get; set; }
        public bool TwoFactorEnabled { get; set; }
        public string UserName { get; set; }
        public string NormalizedUserName { get; set; }
        public string Email { get; set; }
        public string NormalizedEmail { get; set; }
        public string PasswordHash { get; set; }
        public string SecurityStamp { get; set; }
        public string ConcurrencyStamp { get; set; }
        public string PhoneNumber { get; set; }
        public Guid UserGuid { get; set; }
        public string FullName { get; set; }
        public long? VendorId { get; set; }
        public bool IsDeleted { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public DateTimeOffset LatestUpdatedOn { get; set; }
        public long? DefaultShippingAddressId { get; set; }
        public long? DefaultBillingAddressId { get; set; }
        public string RefreshTokenHash { get; set; }
        public string Culture { get; set; }
        public string ExtensionData { get; set; }

        public CoreUserAddress DefaultBillingAddress { get; set; }
        public CoreUserAddress DefaultShippingAddress { get; set; }
        public CoreVendor Vendor { get; set; }
        public ICollection<CatalogProduct> CatalogProductCreatedBy { get; set; }
        public ICollection<CatalogProduct> CatalogProductLatestUpdatedBy { get; set; }
        public ICollection<CatalogProductPriceHistory> CatalogProductPriceHistory { get; set; }
        public ICollection<CmsPage> CmsPageCreatedBy { get; set; }
        public ICollection<CmsPage> CmsPageLatestUpdatedBy { get; set; }
        public ICollection<CommentsComment> CommentsComment { get; set; }
        public ICollection<CoreCustomerGroupUser> CoreCustomerGroupUser { get; set; }
        public ICollection<CoreUserAddress> CoreUserAddress { get; set; }
        public ICollection<CoreUserClaim> CoreUserClaim { get; set; }
        public ICollection<CoreUserLogin> CoreUserLogin { get; set; }
        public ICollection<CoreUserRole> CoreUserRole { get; set; }
        public ICollection<CoreUserToken> CoreUserToken { get; set; }
        public ICollection<InventoryStockHistory> InventoryStockHistory { get; set; }
        public ICollection<NewsNewsItem> NewsNewsItemCreatedBy { get; set; }
        public ICollection<NewsNewsItem> NewsNewsItemLatestUpdatedBy { get; set; }
        public ICollection<OrdersOrder> OrdersOrderCreatedBy { get; set; }
        public ICollection<OrdersOrder> OrdersOrderCustomer { get; set; }
        public ICollection<OrdersOrderHistory> OrdersOrderHistory { get; set; }
        public ICollection<OrdersOrder> OrdersOrderLatestUpdatedBy { get; set; }
        public ICollection<PricingCartRuleUsage> PricingCartRuleUsage { get; set; }
        public ICollection<ProductComparisonComparingProduct> ProductComparisonComparingProduct { get; set; }
        public ICollection<ReviewsReply> ReviewsReply { get; set; }
        public ICollection<ReviewsReview> ReviewsReview { get; set; }
        public ICollection<ShipmentsShipment> ShipmentsShipment { get; set; }
        public ICollection<ShoppingCartCart> ShoppingCartCartCreatedBy { get; set; }
        public ICollection<ShoppingCartCart> ShoppingCartCartCustomer { get; set; }
        public ICollection<WishListWishList> WishListWishList { get; set; }
    }
}
