using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CatalogProduct
    {
        public CatalogProduct()
        {
            CatalogProductAttributeValue = new HashSet<CatalogProductAttributeValue>();
            CatalogProductCategory = new HashSet<CatalogProductCategory>();
            CatalogProductLinkLinkedProduct = new HashSet<CatalogProductLink>();
            CatalogProductLinkProduct = new HashSet<CatalogProductLink>();
            CatalogProductMedia = new HashSet<CatalogProductMedia>();
            CatalogProductOptionCombination = new HashSet<CatalogProductOptionCombination>();
            CatalogProductOptionValue = new HashSet<CatalogProductOptionValue>();
            CatalogProductPriceHistory = new HashSet<CatalogProductPriceHistory>();
            InventoryStock = new HashSet<InventoryStock>();
            InventoryStockHistory = new HashSet<InventoryStockHistory>();
            OrdersOrderItem = new HashSet<OrdersOrderItem>();
            PricingCartRuleProduct = new HashSet<PricingCartRuleProduct>();
            ProductComparisonComparingProduct = new HashSet<ProductComparisonComparingProduct>();
            ShipmentsShipmentItem = new HashSet<ShipmentsShipmentItem>();
            ShoppingCartCartItem = new HashSet<ShoppingCartCartItem>();
            WishListWishListItem = new HashSet<WishListWishListItem>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public string Slug { get; set; }
        public string MetaTitle { get; set; }
        public string MetaKeywords { get; set; }
        public string MetaDescription { get; set; }
        public bool IsPublished { get; set; }
        public DateTimeOffset? PublishedOn { get; set; }
        public bool IsDeleted { get; set; }
        public long CreatedById { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public DateTimeOffset LatestUpdatedOn { get; set; }
        public long LatestUpdatedById { get; set; }
        public string ShortDescription { get; set; }
        public string Description { get; set; }
        public string Specification { get; set; }
        public decimal Price { get; set; }
        public decimal? OldPrice { get; set; }
        public decimal? SpecialPrice { get; set; }
        public DateTimeOffset? SpecialPriceStart { get; set; }
        public DateTimeOffset? SpecialPriceEnd { get; set; }
        public bool HasOptions { get; set; }
        public bool IsVisibleIndividually { get; set; }
        public bool IsFeatured { get; set; }
        public bool IsCallForPricing { get; set; }
        public bool IsAllowToOrder { get; set; }
        public int StockQuantity { get; set; }
        public string Sku { get; set; }
        public string Gtin { get; set; }
        public string NormalizedName { get; set; }
        public int DisplayOrder { get; set; }
        public long? VendorId { get; set; }
        public long? ThumbnailImageId { get; set; }
        public int ReviewsCount { get; set; }
        public double? RatingAverage { get; set; }
        public long? BrandId { get; set; }
        public long? TaxClassId { get; set; }
        public bool StockTrackingIsEnabled { get; set; }
        public long? PromotionImageId { get; set; }

        public CatalogBrand Brand { get; set; }
        public CoreUser CreatedBy { get; set; }
        public CoreUser LatestUpdatedBy { get; set; }
        public TaxTaxClass TaxClass { get; set; }
        public CoreMedia ThumbnailImage { get; set; }
        public ICollection<CatalogProductAttributeValue> CatalogProductAttributeValue { get; set; }
        public ICollection<CatalogProductCategory> CatalogProductCategory { get; set; }
        public ICollection<CatalogProductLink> CatalogProductLinkLinkedProduct { get; set; }
        public ICollection<CatalogProductLink> CatalogProductLinkProduct { get; set; }
        public ICollection<CatalogProductMedia> CatalogProductMedia { get; set; }
        public ICollection<CatalogProductOptionCombination> CatalogProductOptionCombination { get; set; }
        public ICollection<CatalogProductOptionValue> CatalogProductOptionValue { get; set; }
        public ICollection<CatalogProductPriceHistory> CatalogProductPriceHistory { get; set; }
        public ICollection<InventoryStock> InventoryStock { get; set; }
        public ICollection<InventoryStockHistory> InventoryStockHistory { get; set; }
        public ICollection<OrdersOrderItem> OrdersOrderItem { get; set; }
        public ICollection<PricingCartRuleProduct> PricingCartRuleProduct { get; set; }
        public ICollection<ProductComparisonComparingProduct> ProductComparisonComparingProduct { get; set; }
        public ICollection<ShipmentsShipmentItem> ShipmentsShipmentItem { get; set; }
        public ICollection<ShoppingCartCartItem> ShoppingCartCartItem { get; set; }
        public ICollection<WishListWishListItem> WishListWishListItem { get; set; }
    }
}
