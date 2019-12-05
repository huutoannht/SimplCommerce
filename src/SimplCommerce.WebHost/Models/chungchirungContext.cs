using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SimplCommerce.WebHost.Models
{
    public partial class chungchirungContext : DbContext
    {
        //public chungchirungContext()
        //{
        //}

        public chungchirungContext(DbContextOptions<chungchirungContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ActivityLogActivity> ActivityLogActivity { get; set; }
        public virtual DbSet<ActivityLogActivityType> ActivityLogActivityType { get; set; }
        public virtual DbSet<AggregatedCounter> AggregatedCounter { get; set; }
        public virtual DbSet<CatalogBrand> CatalogBrand { get; set; }
        public virtual DbSet<CatalogCategory> CatalogCategory { get; set; }
        public virtual DbSet<CatalogProduct> CatalogProduct { get; set; }
        public virtual DbSet<CatalogProductAttribute> CatalogProductAttribute { get; set; }
        public virtual DbSet<CatalogProductAttributeGroup> CatalogProductAttributeGroup { get; set; }
        public virtual DbSet<CatalogProductAttributeValue> CatalogProductAttributeValue { get; set; }
        public virtual DbSet<CatalogProductCategory> CatalogProductCategory { get; set; }
        public virtual DbSet<CatalogProductLink> CatalogProductLink { get; set; }
        public virtual DbSet<CatalogProductMedia> CatalogProductMedia { get; set; }
        public virtual DbSet<CatalogProductOption> CatalogProductOption { get; set; }
        public virtual DbSet<CatalogProductOptionCombination> CatalogProductOptionCombination { get; set; }
        public virtual DbSet<CatalogProductOptionValue> CatalogProductOptionValue { get; set; }
        public virtual DbSet<CatalogProductPriceHistory> CatalogProductPriceHistory { get; set; }
        public virtual DbSet<CatalogProductTemplate> CatalogProductTemplate { get; set; }
        public virtual DbSet<CatalogProductTemplateProductAttribute> CatalogProductTemplateProductAttribute { get; set; }
        public virtual DbSet<Certification> Certification { get; set; }
        public virtual DbSet<ChuRung> ChuRung { get; set; }
        public virtual DbSet<CmsMenu> CmsMenu { get; set; }
        public virtual DbSet<CmsMenuItem> CmsMenuItem { get; set; }
        public virtual DbSet<CmsPage> CmsPage { get; set; }
        public virtual DbSet<CommentsComment> CommentsComment { get; set; }
        public virtual DbSet<ContactsContact> ContactsContact { get; set; }
        public virtual DbSet<ContactsContactArea> ContactsContactArea { get; set; }
        public virtual DbSet<CoreAddress> CoreAddress { get; set; }
        public virtual DbSet<CoreAppSetting> CoreAppSetting { get; set; }
        public virtual DbSet<CoreCountry> CoreCountry { get; set; }
        public virtual DbSet<CoreCustomerGroup> CoreCustomerGroup { get; set; }
        public virtual DbSet<CoreCustomerGroupUser> CoreCustomerGroupUser { get; set; }
        public virtual DbSet<CoreDistrict> CoreDistrict { get; set; }
        public virtual DbSet<CoreEntity> CoreEntity { get; set; }
        public virtual DbSet<CoreEntityType> CoreEntityType { get; set; }
        public virtual DbSet<CoreMedia> CoreMedia { get; set; }
        public virtual DbSet<CoreRole> CoreRole { get; set; }
        public virtual DbSet<CoreRoleClaim> CoreRoleClaim { get; set; }
        public virtual DbSet<CoreStateOrProvince> CoreStateOrProvince { get; set; }
        public virtual DbSet<CoreUser> CoreUser { get; set; }
        public virtual DbSet<CoreUserAddress> CoreUserAddress { get; set; }
        public virtual DbSet<CoreUserClaim> CoreUserClaim { get; set; }
        public virtual DbSet<CoreUserLogin> CoreUserLogin { get; set; }
        public virtual DbSet<CoreUserRole> CoreUserRole { get; set; }
        public virtual DbSet<CoreUserToken> CoreUserToken { get; set; }
        public virtual DbSet<CoreVendor> CoreVendor { get; set; }
        public virtual DbSet<CoreWidget> CoreWidget { get; set; }
        public virtual DbSet<CoreWidgetInstance> CoreWidgetInstance { get; set; }
        public virtual DbSet<CoreWidgetZone> CoreWidgetZone { get; set; }
        public virtual DbSet<Hash> Hash { get; set; }
        public virtual DbSet<InventoryStock> InventoryStock { get; set; }
        public virtual DbSet<InventoryStockHistory> InventoryStockHistory { get; set; }
        public virtual DbSet<InventoryWarehouse> InventoryWarehouse { get; set; }
        public virtual DbSet<Job> Job { get; set; }
        public virtual DbSet<JobParameter> JobParameter { get; set; }
        public virtual DbSet<JobQueue> JobQueue { get; set; }
        public virtual DbSet<List> List { get; set; }
        public virtual DbSet<LocalizationCulture> LocalizationCulture { get; set; }
        public virtual DbSet<LocalizationResource> LocalizationResource { get; set; }
        public virtual DbSet<NewsNewsCategory> NewsNewsCategory { get; set; }
        public virtual DbSet<NewsNewsItem> NewsNewsItem { get; set; }
        public virtual DbSet<NewsNewsItemCategory> NewsNewsItemCategory { get; set; }
        public virtual DbSet<OrdersOrder> OrdersOrder { get; set; }
        public virtual DbSet<OrdersOrderAddress> OrdersOrderAddress { get; set; }
        public virtual DbSet<OrdersOrderHistory> OrdersOrderHistory { get; set; }
        public virtual DbSet<OrdersOrderItem> OrdersOrderItem { get; set; }
        public virtual DbSet<PaymentsPayment> PaymentsPayment { get; set; }
        public virtual DbSet<PaymentsPaymentProvider> PaymentsPaymentProvider { get; set; }
        public virtual DbSet<PefcCertificate> PefcCertificate { get; set; }
        public virtual DbSet<PefcCertificateMapping> PefcCertificateMapping { get; set; }
        public virtual DbSet<PefcCompany> PefcCompany { get; set; }
        public virtual DbSet<PefcProduct> PefcProduct { get; set; }
        public virtual DbSet<PricingCartRule> PricingCartRule { get; set; }
        public virtual DbSet<PricingCartRuleCategory> PricingCartRuleCategory { get; set; }
        public virtual DbSet<PricingCartRuleCustomerGroup> PricingCartRuleCustomerGroup { get; set; }
        public virtual DbSet<PricingCartRuleProduct> PricingCartRuleProduct { get; set; }
        public virtual DbSet<PricingCartRuleUsage> PricingCartRuleUsage { get; set; }
        public virtual DbSet<PricingCatalogRule> PricingCatalogRule { get; set; }
        public virtual DbSet<PricingCatalogRuleCustomerGroup> PricingCatalogRuleCustomerGroup { get; set; }
        public virtual DbSet<PricingCoupon> PricingCoupon { get; set; }
        public virtual DbSet<ProductComparisonComparingProduct> ProductComparisonComparingProduct { get; set; }
        public virtual DbSet<ProductRecentlyViewedRecentlyViewedProduct> ProductRecentlyViewedRecentlyViewedProduct { get; set; }
        public virtual DbSet<ReviewsReply> ReviewsReply { get; set; }
        public virtual DbSet<ReviewsReview> ReviewsReview { get; set; }
        public virtual DbSet<Schema> Schema { get; set; }
        public virtual DbSet<SearchQuery> SearchQuery { get; set; }
        public virtual DbSet<Server> Server { get; set; }
        public virtual DbSet<Set> Set { get; set; }
        public virtual DbSet<ShipmentsShipment> ShipmentsShipment { get; set; }
        public virtual DbSet<ShipmentsShipmentItem> ShipmentsShipmentItem { get; set; }
        public virtual DbSet<ShippingShippingProvider> ShippingShippingProvider { get; set; }
        public virtual DbSet<ShippingTableRatePriceAndDestination> ShippingTableRatePriceAndDestination { get; set; }
        public virtual DbSet<ShoppingCartCart> ShoppingCartCart { get; set; }
        public virtual DbSet<ShoppingCartCartItem> ShoppingCartCartItem { get; set; }
        public virtual DbSet<State> State { get; set; }
        public virtual DbSet<TaxTaxClass> TaxTaxClass { get; set; }
        public virtual DbSet<TaxTaxRate> TaxTaxRate { get; set; }
        public virtual DbSet<WishListWishList> WishListWishList { get; set; }
        public virtual DbSet<WishListWishListItem> WishListWishListItem { get; set; }

        // Unable to generate entity type for table 'HangFire.Counter'. Please see the warning messages.

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=TCSVN00034N\\SQLEXPRESS;Database=chungchirung;uid=sa;pwd=123456;MultipleActiveResultSets=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ActivityLogActivity>(entity =>
            {
                entity.ToTable("ActivityLog_Activity");

                entity.HasIndex(e => e.ActivityTypeId);

                entity.Property(e => e.EntityTypeId)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.HasOne(d => d.ActivityType)
                    .WithMany(p => p.ActivityLogActivity)
                    .HasForeignKey(d => d.ActivityTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<ActivityLogActivityType>(entity =>
            {
                entity.ToTable("ActivityLog_ActivityType");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);
            });

            modelBuilder.Entity<AggregatedCounter>(entity =>
            {
                entity.HasKey(e => e.Key);

                entity.ToTable("AggregatedCounter", "HangFire");

                entity.HasIndex(e => e.ExpireAt)
                    .HasName("IX_HangFire_AggregatedCounter_ExpireAt")
                    .HasFilter("([ExpireAt] IS NOT NULL)");

                entity.Property(e => e.Key)
                    .HasMaxLength(100)
                    .ValueGeneratedNever();

                entity.Property(e => e.ExpireAt).HasColumnType("datetime");
            });

            modelBuilder.Entity<CatalogBrand>(entity =>
            {
                entity.ToTable("Catalog_Brand");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.Property(e => e.Slug)
                    .IsRequired()
                    .HasMaxLength(450);
            });

            modelBuilder.Entity<CatalogCategory>(entity =>
            {
                entity.ToTable("Catalog_Category");

                entity.HasIndex(e => e.ParentId);

                entity.HasIndex(e => e.ThumbnailImageId);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.Property(e => e.Slug)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.HasOne(d => d.Parent)
                    .WithMany(p => p.InverseParent)
                    .HasForeignKey(d => d.ParentId);

                entity.HasOne(d => d.ThumbnailImage)
                    .WithMany(p => p.CatalogCategory)
                    .HasForeignKey(d => d.ThumbnailImageId);
            });

            modelBuilder.Entity<CatalogProduct>(entity =>
            {
                entity.ToTable("Catalog_Product");

                entity.HasIndex(e => e.BrandId);

                entity.HasIndex(e => e.CreatedById);

                entity.HasIndex(e => e.LatestUpdatedById);

                entity.HasIndex(e => e.TaxClassId);

                entity.HasIndex(e => e.ThumbnailImageId);

                entity.Property(e => e.DescriptionEn).HasColumnName("DescriptionEN");

                entity.Property(e => e.Gtin).HasMaxLength(450);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.Property(e => e.NameEn)
                    .HasColumnName("NameEN")
                    .HasMaxLength(450);

                entity.Property(e => e.NormalizedName).HasMaxLength(450);

                entity.Property(e => e.ShortDescriptionEn).HasColumnName("ShortDescriptionEN");

                entity.Property(e => e.Sku).HasMaxLength(450);

                entity.Property(e => e.Slug)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.HasOne(d => d.Brand)
                    .WithMany(p => p.CatalogProduct)
                    .HasForeignKey(d => d.BrandId);

                entity.HasOne(d => d.CreatedBy)
                    .WithMany(p => p.CatalogProductCreatedBy)
                    .HasForeignKey(d => d.CreatedById)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.LatestUpdatedBy)
                    .WithMany(p => p.CatalogProductLatestUpdatedBy)
                    .HasForeignKey(d => d.LatestUpdatedById)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.TaxClass)
                    .WithMany(p => p.CatalogProduct)
                    .HasForeignKey(d => d.TaxClassId);

                entity.HasOne(d => d.ThumbnailImage)
                    .WithMany(p => p.CatalogProduct)
                    .HasForeignKey(d => d.ThumbnailImageId);
            });

            modelBuilder.Entity<CatalogProductAttribute>(entity =>
            {
                entity.ToTable("Catalog_ProductAttribute");

                entity.HasIndex(e => e.GroupId);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.HasOne(d => d.Group)
                    .WithMany(p => p.CatalogProductAttribute)
                    .HasForeignKey(d => d.GroupId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<CatalogProductAttributeGroup>(entity =>
            {
                entity.ToTable("Catalog_ProductAttributeGroup");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);
            });

            modelBuilder.Entity<CatalogProductAttributeValue>(entity =>
            {
                entity.ToTable("Catalog_ProductAttributeValue");

                entity.HasIndex(e => e.AttributeId);

                entity.HasIndex(e => e.ProductId);

                entity.HasOne(d => d.Attribute)
                    .WithMany(p => p.CatalogProductAttributeValue)
                    .HasForeignKey(d => d.AttributeId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.CatalogProductAttributeValue)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<CatalogProductCategory>(entity =>
            {
                entity.ToTable("Catalog_ProductCategory");

                entity.HasIndex(e => e.CategoryId);

                entity.HasIndex(e => e.ProductId);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.CatalogProductCategory)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.CatalogProductCategory)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<CatalogProductLink>(entity =>
            {
                entity.ToTable("Catalog_ProductLink");

                entity.HasIndex(e => e.LinkedProductId);

                entity.HasIndex(e => e.ProductId);

                entity.HasOne(d => d.LinkedProduct)
                    .WithMany(p => p.CatalogProductLinkLinkedProduct)
                    .HasForeignKey(d => d.LinkedProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.CatalogProductLinkProduct)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<CatalogProductMedia>(entity =>
            {
                entity.ToTable("Catalog_ProductMedia");

                entity.HasIndex(e => e.MediaId);

                entity.HasIndex(e => e.ProductId);

                entity.HasOne(d => d.Media)
                    .WithMany(p => p.CatalogProductMedia)
                    .HasForeignKey(d => d.MediaId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.CatalogProductMedia)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<CatalogProductOption>(entity =>
            {
                entity.ToTable("Catalog_ProductOption");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);
            });

            modelBuilder.Entity<CatalogProductOptionCombination>(entity =>
            {
                entity.ToTable("Catalog_ProductOptionCombination");

                entity.HasIndex(e => e.OptionId);

                entity.HasIndex(e => e.ProductId);

                entity.HasOne(d => d.Option)
                    .WithMany(p => p.CatalogProductOptionCombination)
                    .HasForeignKey(d => d.OptionId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.CatalogProductOptionCombination)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<CatalogProductOptionValue>(entity =>
            {
                entity.ToTable("Catalog_ProductOptionValue");

                entity.HasIndex(e => e.OptionId);

                entity.HasIndex(e => e.ProductId);

                entity.HasOne(d => d.Option)
                    .WithMany(p => p.CatalogProductOptionValue)
                    .HasForeignKey(d => d.OptionId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.CatalogProductOptionValue)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<CatalogProductPriceHistory>(entity =>
            {
                entity.ToTable("Catalog_ProductPriceHistory");

                entity.HasIndex(e => e.CreatedById);

                entity.HasIndex(e => e.ProductId);

                entity.HasOne(d => d.CreatedBy)
                    .WithMany(p => p.CatalogProductPriceHistory)
                    .HasForeignKey(d => d.CreatedById)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.CatalogProductPriceHistory)
                    .HasForeignKey(d => d.ProductId);
            });

            modelBuilder.Entity<CatalogProductTemplate>(entity =>
            {
                entity.ToTable("Catalog_ProductTemplate");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);
            });

            modelBuilder.Entity<CatalogProductTemplateProductAttribute>(entity =>
            {
                entity.HasKey(e => new { e.ProductTemplateId, e.ProductAttributeId });

                entity.ToTable("Catalog_ProductTemplateProductAttribute");

                entity.HasIndex(e => e.ProductAttributeId);

                entity.HasOne(d => d.ProductAttribute)
                    .WithMany(p => p.CatalogProductTemplateProductAttribute)
                    .HasForeignKey(d => d.ProductAttributeId);

                entity.HasOne(d => d.ProductTemplate)
                    .WithMany(p => p.CatalogProductTemplateProductAttribute)
                    .HasForeignKey(d => d.ProductTemplateId);
            });

            modelBuilder.Entity<Certification>(entity =>
            {
                entity.Property(e => e.CertificationBodyAddress).HasMaxLength(256);

                entity.Property(e => e.CertificationBodyEmail).HasMaxLength(256);

                entity.Property(e => e.CertificationBodyFax).HasMaxLength(256);

                entity.Property(e => e.CertificationBodyName).HasMaxLength(256);

                entity.Property(e => e.CertificationBodyPhone).HasMaxLength(256);

                entity.Property(e => e.CertificationBodyWebsite).HasMaxLength(256);

                entity.Property(e => e.CertificationInformationCertificate).HasMaxLength(256);

                entity.Property(e => e.CertificationInformationCertificateNumber).HasMaxLength(256);

                entity.Property(e => e.CertificationInformationExpiryDate).HasColumnType("date");

                entity.Property(e => e.CertificationInformationStatus).HasMaxLength(256);

                entity.Property(e => e.CertificationInformationSubCertificateNumber).HasMaxLength(256);

                entity.Property(e => e.CertificationInformationTypeOfCertification).HasMaxLength(256);

                entity.Property(e => e.CompanyInformationAddress).HasMaxLength(256);

                entity.Property(e => e.CompanyInformationContactPersonName).HasMaxLength(256);

                entity.Property(e => e.CompanyInformationEmail).HasMaxLength(256);

                entity.Property(e => e.CompanyName).HasMaxLength(256);

                entity.Property(e => e.LogoLisenceExprityDate).HasColumnType("date");

                entity.Property(e => e.LogoLisenceNumber).HasMaxLength(256);

                entity.Property(e => e.ProductsCategoriesLevel1).HasMaxLength(256);

                entity.Property(e => e.ProductsCategoriesLevel2).HasMaxLength(256);

                entity.Property(e => e.ProductsCategoriesLevel3).HasMaxLength(256);

                entity.Property(e => e.ProductsName).HasMaxLength(256);
            });

            modelBuilder.Entity<ChuRung>(entity =>
            {
                entity.Property(e => e.DiaChi).HasMaxLength(1000);

                entity.Property(e => e.LoaiChungChi).HasMaxLength(256);

                entity.Property(e => e.LoaiRung).HasMaxLength(256);

                entity.Property(e => e.MaSo).HasMaxLength(256);

                entity.Property(e => e.TenChuRung).HasMaxLength(256);

                entity.Property(e => e.ThoiGianCap).HasColumnType("datetime");

                entity.Property(e => e.ToChuc).HasMaxLength(256);
            });

            modelBuilder.Entity<CmsMenu>(entity =>
            {
                entity.ToTable("Cms_Menu");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);
            });

            modelBuilder.Entity<CmsMenuItem>(entity =>
            {
                entity.ToTable("Cms_MenuItem");

                entity.HasIndex(e => e.EntityId);

                entity.HasIndex(e => e.MenuId);

                entity.HasIndex(e => e.ParentId);

                entity.HasOne(d => d.Entity)
                    .WithMany(p => p.CmsMenuItem)
                    .HasForeignKey(d => d.EntityId);

                entity.HasOne(d => d.Menu)
                    .WithMany(p => p.CmsMenuItem)
                    .HasForeignKey(d => d.MenuId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Parent)
                    .WithMany(p => p.InverseParent)
                    .HasForeignKey(d => d.ParentId);
            });

            modelBuilder.Entity<CmsPage>(entity =>
            {
                entity.ToTable("Cms_Page");

                entity.HasIndex(e => e.CreatedById);

                entity.HasIndex(e => e.LatestUpdatedById);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.Property(e => e.Slug)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.HasOne(d => d.CreatedBy)
                    .WithMany(p => p.CmsPageCreatedBy)
                    .HasForeignKey(d => d.CreatedById)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.LatestUpdatedBy)
                    .WithMany(p => p.CmsPageLatestUpdatedBy)
                    .HasForeignKey(d => d.LatestUpdatedById)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<CommentsComment>(entity =>
            {
                entity.ToTable("Comments_Comment");

                entity.HasIndex(e => e.ParentId);

                entity.HasIndex(e => e.UserId);

                entity.Property(e => e.CommenterPhoneNumber).HasMaxLength(10);

                entity.HasOne(d => d.Parent)
                    .WithMany(p => p.InverseParent)
                    .HasForeignKey(d => d.ParentId);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.CommentsComment)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<ContactsContact>(entity =>
            {
                entity.ToTable("Contacts_Contact");

                entity.HasIndex(e => e.ContactAreaId);

                entity.HasOne(d => d.ContactArea)
                    .WithMany(p => p.ContactsContact)
                    .HasForeignKey(d => d.ContactAreaId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<ContactsContactArea>(entity =>
            {
                entity.ToTable("Contacts_ContactArea");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);
            });

            modelBuilder.Entity<CoreAddress>(entity =>
            {
                entity.ToTable("Core_Address");

                entity.HasIndex(e => e.CountryId);

                entity.HasIndex(e => e.DistrictId);

                entity.HasIndex(e => e.StateOrProvinceId);

                entity.Property(e => e.CountryId).IsRequired();

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.CoreAddress)
                    .HasForeignKey(d => d.CountryId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.District)
                    .WithMany(p => p.CoreAddress)
                    .HasForeignKey(d => d.DistrictId);

                entity.HasOne(d => d.StateOrProvince)
                    .WithMany(p => p.CoreAddress)
                    .HasForeignKey(d => d.StateOrProvinceId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<CoreAppSetting>(entity =>
            {
                entity.ToTable("Core_AppSetting");

                entity.Property(e => e.Id).ValueGeneratedNever();
            });

            modelBuilder.Entity<CoreCountry>(entity =>
            {
                entity.ToTable("Core_Country");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);
            });

            modelBuilder.Entity<CoreCustomerGroup>(entity =>
            {
                entity.ToTable("Core_CustomerGroup");

                entity.HasIndex(e => e.Name)
                    .IsUnique();

                entity.Property(e => e.Name).IsRequired();
            });

            modelBuilder.Entity<CoreCustomerGroupUser>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.CustomerGroupId });

                entity.ToTable("Core_CustomerGroupUser");

                entity.HasIndex(e => e.CustomerGroupId);

                entity.HasOne(d => d.CustomerGroup)
                    .WithMany(p => p.CoreCustomerGroupUser)
                    .HasForeignKey(d => d.CustomerGroupId);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.CoreCustomerGroupUser)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<CoreDistrict>(entity =>
            {
                entity.ToTable("Core_District");

                entity.HasIndex(e => e.StateOrProvinceId);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.HasOne(d => d.StateOrProvince)
                    .WithMany(p => p.CoreDistrict)
                    .HasForeignKey(d => d.StateOrProvinceId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<CoreEntity>(entity =>
            {
                entity.ToTable("Core_Entity");

                entity.HasIndex(e => e.EntityTypeId);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.Property(e => e.Slug)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.HasOne(d => d.EntityType)
                    .WithMany(p => p.CoreEntity)
                    .HasForeignKey(d => d.EntityTypeId);
            });

            modelBuilder.Entity<CoreEntityType>(entity =>
            {
                entity.ToTable("Core_EntityType");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.AreaName).HasMaxLength(450);

                entity.Property(e => e.RoutingAction).HasMaxLength(450);

                entity.Property(e => e.RoutingController).HasMaxLength(450);
            });

            modelBuilder.Entity<CoreMedia>(entity =>
            {
                entity.ToTable("Core_Media");
            });

            modelBuilder.Entity<CoreRole>(entity =>
            {
                entity.ToTable("Core_Role");

                entity.HasIndex(e => e.NormalizedName)
                    .HasName("RoleNameIndex")
                    .IsUnique()
                    .HasFilter("([NormalizedName] IS NOT NULL)");

                entity.Property(e => e.Name).HasMaxLength(256);

                entity.Property(e => e.NormalizedName).HasMaxLength(256);
            });

            modelBuilder.Entity<CoreRoleClaim>(entity =>
            {
                entity.ToTable("Core_RoleClaim");

                entity.HasIndex(e => e.RoleId);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.CoreRoleClaim)
                    .HasForeignKey(d => d.RoleId);
            });

            modelBuilder.Entity<CoreStateOrProvince>(entity =>
            {
                entity.ToTable("Core_StateOrProvince");

                entity.HasIndex(e => e.CountryId);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.CoreStateOrProvince)
                    .HasForeignKey(d => d.CountryId);
            });

            modelBuilder.Entity<CoreUser>(entity =>
            {
                entity.ToTable("Core_User");

                entity.HasIndex(e => e.DefaultBillingAddressId);

                entity.HasIndex(e => e.DefaultShippingAddressId);

                entity.HasIndex(e => e.NormalizedEmail)
                    .HasName("EmailIndex");

                entity.HasIndex(e => e.NormalizedUserName)
                    .HasName("UserNameIndex")
                    .IsUnique()
                    .HasFilter("([NormalizedUserName] IS NOT NULL)");

                entity.HasIndex(e => e.VendorId);

                entity.Property(e => e.Email).HasMaxLength(256);

                entity.Property(e => e.FullName)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.Property(e => e.NormalizedEmail).HasMaxLength(256);

                entity.Property(e => e.NormalizedUserName).HasMaxLength(256);

                entity.Property(e => e.UserName).HasMaxLength(256);

                entity.HasOne(d => d.DefaultBillingAddress)
                    .WithMany(p => p.CoreUserDefaultBillingAddress)
                    .HasForeignKey(d => d.DefaultBillingAddressId);

                entity.HasOne(d => d.DefaultShippingAddress)
                    .WithMany(p => p.CoreUserDefaultShippingAddress)
                    .HasForeignKey(d => d.DefaultShippingAddressId);

                entity.HasOne(d => d.Vendor)
                    .WithMany(p => p.CoreUser)
                    .HasForeignKey(d => d.VendorId);
            });

            modelBuilder.Entity<CoreUserAddress>(entity =>
            {
                entity.ToTable("Core_UserAddress");

                entity.HasIndex(e => e.AddressId);

                entity.HasIndex(e => e.UserId);

                entity.HasOne(d => d.Address)
                    .WithMany(p => p.CoreUserAddress)
                    .HasForeignKey(d => d.AddressId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.CoreUserAddress)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<CoreUserClaim>(entity =>
            {
                entity.ToTable("Core_UserClaim");

                entity.HasIndex(e => e.UserId);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.CoreUserClaim)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<CoreUserLogin>(entity =>
            {
                entity.HasKey(e => new { e.LoginProvider, e.ProviderKey });

                entity.ToTable("Core_UserLogin");

                entity.HasIndex(e => e.UserId);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.CoreUserLogin)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<CoreUserRole>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.RoleId });

                entity.ToTable("Core_UserRole");

                entity.HasIndex(e => e.RoleId);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.CoreUserRole)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.CoreUserRole)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<CoreUserToken>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.LoginProvider, e.Name });

                entity.ToTable("Core_UserToken");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.CoreUserToken)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<CoreVendor>(entity =>
            {
                entity.ToTable("Core_Vendor");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.Property(e => e.Slug)
                    .IsRequired()
                    .HasMaxLength(450);
            });

            modelBuilder.Entity<CoreWidget>(entity =>
            {
                entity.ToTable("Core_Widget");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);
            });

            modelBuilder.Entity<CoreWidgetInstance>(entity =>
            {
                entity.ToTable("Core_WidgetInstance");

                entity.HasIndex(e => e.WidgetId);

                entity.HasIndex(e => e.WidgetZoneId);

                entity.HasOne(d => d.Widget)
                    .WithMany(p => p.CoreWidgetInstance)
                    .HasForeignKey(d => d.WidgetId);

                entity.HasOne(d => d.WidgetZone)
                    .WithMany(p => p.CoreWidgetInstance)
                    .HasForeignKey(d => d.WidgetZoneId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<CoreWidgetZone>(entity =>
            {
                entity.ToTable("Core_WidgetZone");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);
            });

            modelBuilder.Entity<Hash>(entity =>
            {
                entity.HasKey(e => new { e.Key, e.Field });

                entity.ToTable("Hash", "HangFire");

                entity.HasIndex(e => e.ExpireAt)
                    .HasName("IX_HangFire_Hash_ExpireAt")
                    .HasFilter("([ExpireAt] IS NOT NULL)");

                entity.Property(e => e.Key).HasMaxLength(100);

                entity.Property(e => e.Field).HasMaxLength(100);
            });

            modelBuilder.Entity<InventoryStock>(entity =>
            {
                entity.ToTable("Inventory_Stock");

                entity.HasIndex(e => e.ProductId);

                entity.HasIndex(e => e.WarehouseId);

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.InventoryStock)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Warehouse)
                    .WithMany(p => p.InventoryStock)
                    .HasForeignKey(d => d.WarehouseId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<InventoryStockHistory>(entity =>
            {
                entity.ToTable("Inventory_StockHistory");

                entity.HasIndex(e => e.CreatedById);

                entity.HasIndex(e => e.ProductId);

                entity.HasIndex(e => e.WarehouseId);

                entity.HasOne(d => d.CreatedBy)
                    .WithMany(p => p.InventoryStockHistory)
                    .HasForeignKey(d => d.CreatedById)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.InventoryStockHistory)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Warehouse)
                    .WithMany(p => p.InventoryStockHistory)
                    .HasForeignKey(d => d.WarehouseId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<InventoryWarehouse>(entity =>
            {
                entity.ToTable("Inventory_Warehouse");

                entity.HasIndex(e => e.AddressId);

                entity.HasIndex(e => e.VendorId);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.HasOne(d => d.Address)
                    .WithMany(p => p.InventoryWarehouse)
                    .HasForeignKey(d => d.AddressId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Vendor)
                    .WithMany(p => p.InventoryWarehouse)
                    .HasForeignKey(d => d.VendorId);
            });

            modelBuilder.Entity<Job>(entity =>
            {
                entity.ToTable("Job", "HangFire");

                entity.HasIndex(e => e.StateName)
                    .HasName("IX_HangFire_Job_StateName")
                    .HasFilter("([StateName] IS NOT NULL)");

                entity.HasIndex(e => new { e.StateName, e.ExpireAt })
                    .HasName("IX_HangFire_Job_ExpireAt")
                    .HasFilter("([ExpireAt] IS NOT NULL)");

                entity.Property(e => e.Arguments).IsRequired();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.ExpireAt).HasColumnType("datetime");

                entity.Property(e => e.InvocationData).IsRequired();

                entity.Property(e => e.StateName).HasMaxLength(20);
            });

            modelBuilder.Entity<JobParameter>(entity =>
            {
                entity.HasKey(e => new { e.JobId, e.Name });

                entity.ToTable("JobParameter", "HangFire");

                entity.Property(e => e.Name).HasMaxLength(40);

                entity.HasOne(d => d.Job)
                    .WithMany(p => p.JobParameter)
                    .HasForeignKey(d => d.JobId)
                    .HasConstraintName("FK_HangFire_JobParameter_Job");
            });

            modelBuilder.Entity<JobQueue>(entity =>
            {
                entity.HasKey(e => new { e.Queue, e.Id });

                entity.ToTable("JobQueue", "HangFire");

                entity.Property(e => e.Queue).HasMaxLength(50);

                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.FetchedAt).HasColumnType("datetime");
            });

            modelBuilder.Entity<List>(entity =>
            {
                entity.HasKey(e => new { e.Key, e.Id });

                entity.ToTable("List", "HangFire");

                entity.HasIndex(e => e.ExpireAt)
                    .HasName("IX_HangFire_List_ExpireAt")
                    .HasFilter("([ExpireAt] IS NOT NULL)");

                entity.Property(e => e.Key).HasMaxLength(100);

                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.ExpireAt).HasColumnType("datetime");
            });

            modelBuilder.Entity<LocalizationCulture>(entity =>
            {
                entity.ToTable("Localization_Culture");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);
            });

            modelBuilder.Entity<LocalizationResource>(entity =>
            {
                entity.ToTable("Localization_Resource");

                entity.HasIndex(e => e.CultureId);

                entity.Property(e => e.CultureId).IsRequired();

                entity.Property(e => e.Value)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.HasOne(d => d.Culture)
                    .WithMany(p => p.LocalizationResource)
                    .HasForeignKey(d => d.CultureId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<NewsNewsCategory>(entity =>
            {
                entity.ToTable("News_NewsCategory");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.Property(e => e.Slug)
                    .IsRequired()
                    .HasMaxLength(450);
            });

            modelBuilder.Entity<NewsNewsItem>(entity =>
            {
                entity.ToTable("News_NewsItem");

                entity.HasIndex(e => e.CreatedById);

                entity.HasIndex(e => e.LatestUpdatedById);

                entity.HasIndex(e => e.ThumbnailImageId);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.Property(e => e.Slug)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.HasOne(d => d.CreatedBy)
                    .WithMany(p => p.NewsNewsItemCreatedBy)
                    .HasForeignKey(d => d.CreatedById)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.LatestUpdatedBy)
                    .WithMany(p => p.NewsNewsItemLatestUpdatedBy)
                    .HasForeignKey(d => d.LatestUpdatedById)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.ThumbnailImage)
                    .WithMany(p => p.NewsNewsItem)
                    .HasForeignKey(d => d.ThumbnailImageId);
            });

            modelBuilder.Entity<NewsNewsItemCategory>(entity =>
            {
                entity.HasKey(e => new { e.CategoryId, e.NewsItemId });

                entity.ToTable("News_NewsItemCategory");

                entity.HasIndex(e => e.NewsItemId);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.NewsNewsItemCategory)
                    .HasForeignKey(d => d.CategoryId);

                entity.HasOne(d => d.NewsItem)
                    .WithMany(p => p.NewsNewsItemCategory)
                    .HasForeignKey(d => d.NewsItemId);
            });

            modelBuilder.Entity<OrdersOrder>(entity =>
            {
                entity.ToTable("Orders_Order");

                entity.HasIndex(e => e.BillingAddressId);

                entity.HasIndex(e => e.CreatedById);

                entity.HasIndex(e => e.CustomerId);

                entity.HasIndex(e => e.LatestUpdatedById);

                entity.HasIndex(e => e.ParentId);

                entity.HasIndex(e => e.ShippingAddressId);

                entity.Property(e => e.CustomerId).HasDefaultValueSql("(CONVERT([bigint],(0)))");

                entity.Property(e => e.LatestUpdatedById).HasDefaultValueSql("(CONVERT([bigint],(0)))");

                entity.HasOne(d => d.BillingAddress)
                    .WithMany(p => p.OrdersOrderBillingAddress)
                    .HasForeignKey(d => d.BillingAddressId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.CreatedBy)
                    .WithMany(p => p.OrdersOrderCreatedBy)
                    .HasForeignKey(d => d.CreatedById)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.OrdersOrderCustomer)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.LatestUpdatedBy)
                    .WithMany(p => p.OrdersOrderLatestUpdatedBy)
                    .HasForeignKey(d => d.LatestUpdatedById)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Parent)
                    .WithMany(p => p.InverseParent)
                    .HasForeignKey(d => d.ParentId);

                entity.HasOne(d => d.ShippingAddress)
                    .WithMany(p => p.OrdersOrderShippingAddress)
                    .HasForeignKey(d => d.ShippingAddressId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<OrdersOrderAddress>(entity =>
            {
                entity.ToTable("Orders_OrderAddress");

                entity.HasIndex(e => e.CountryId);

                entity.HasIndex(e => e.DistrictId);

                entity.HasIndex(e => e.StateOrProvinceId);

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.OrdersOrderAddress)
                    .HasForeignKey(d => d.CountryId);

                entity.HasOne(d => d.District)
                    .WithMany(p => p.OrdersOrderAddress)
                    .HasForeignKey(d => d.DistrictId);

                entity.HasOne(d => d.StateOrProvince)
                    .WithMany(p => p.OrdersOrderAddress)
                    .HasForeignKey(d => d.StateOrProvinceId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<OrdersOrderHistory>(entity =>
            {
                entity.ToTable("Orders_OrderHistory");

                entity.HasIndex(e => e.CreatedById);

                entity.HasIndex(e => e.OrderId);

                entity.HasOne(d => d.CreatedBy)
                    .WithMany(p => p.OrdersOrderHistory)
                    .HasForeignKey(d => d.CreatedById)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.OrdersOrderHistory)
                    .HasForeignKey(d => d.OrderId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<OrdersOrderItem>(entity =>
            {
                entity.ToTable("Orders_OrderItem");

                entity.HasIndex(e => e.OrderId);

                entity.HasIndex(e => e.ProductId);

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.OrdersOrderItem)
                    .HasForeignKey(d => d.OrderId);

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.OrdersOrderItem)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<PaymentsPayment>(entity =>
            {
                entity.ToTable("Payments_Payment");

                entity.HasIndex(e => e.OrderId);

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.PaymentsPayment)
                    .HasForeignKey(d => d.OrderId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<PaymentsPaymentProvider>(entity =>
            {
                entity.ToTable("Payments_PaymentProvider");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);
            });

            modelBuilder.Entity<PefcCertificate>(entity =>
            {
                entity.ToTable("PEFC_Certificate");

                entity.Property(e => e.Address).HasMaxLength(256);

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.Email).HasMaxLength(256);

                entity.Property(e => e.ExpiryDate).HasColumnType("datetime");

                entity.Property(e => e.Fax).HasMaxLength(20);

                entity.Property(e => e.LicenseNumber).HasMaxLength(256);

                entity.Property(e => e.Name).HasMaxLength(256);

                entity.Property(e => e.NameBody).HasMaxLength(256);

                entity.Property(e => e.Number).HasMaxLength(20);

                entity.Property(e => e.Phone).HasMaxLength(20);

                entity.Property(e => e.Status).HasMaxLength(200);

                entity.Property(e => e.SubNumber).HasMaxLength(20);

                entity.Property(e => e.Type).HasMaxLength(256);

                entity.Property(e => e.Website).HasMaxLength(256);
            });

            modelBuilder.Entity<PefcCertificateMapping>(entity =>
            {
                entity.ToTable("PEFC_CertificateMapping");

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.HasOne(d => d.Certificate)
                    .WithMany(p => p.PefcCertificateMapping)
                    .HasForeignKey(d => d.CertificateId)
                    .HasConstraintName("FK_PEFC_CertificateMapping_PEFC_Certificate");

                entity.HasOne(d => d.Company)
                    .WithMany(p => p.PefcCertificateMapping)
                    .HasForeignKey(d => d.CompanyId)
                    .HasConstraintName("FK_PEFC_CertificateMapping_PEFC_Company");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.PefcCertificateMapping)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK_PEFC_CertificateMapping_PEFC_Product");
            });

            modelBuilder.Entity<PefcCompany>(entity =>
            {
                entity.ToTable("PEFC_Company");

                entity.Property(e => e.Address).HasMaxLength(256);

                entity.Property(e => e.Email).HasMaxLength(256);

                entity.Property(e => e.Fax).HasMaxLength(20);

                entity.Property(e => e.Name).HasMaxLength(256);

                entity.Property(e => e.Phone).HasMaxLength(20);

                entity.Property(e => e.Website).HasMaxLength(256);
            });

            modelBuilder.Entity<PefcProduct>(entity =>
            {
                entity.ToTable("PEFC_Product");

                entity.Property(e => e.IndustrySector).HasMaxLength(256);

                entity.Property(e => e.Name).HasMaxLength(256);

                entity.Property(e => e.Type).HasMaxLength(256);
            });

            modelBuilder.Entity<PricingCartRule>(entity =>
            {
                entity.ToTable("Pricing_CartRule");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);
            });

            modelBuilder.Entity<PricingCartRuleCategory>(entity =>
            {
                entity.HasKey(e => new { e.CartRuleId, e.CategoryId });

                entity.ToTable("Pricing_CartRuleCategory");

                entity.HasIndex(e => e.CategoryId);

                entity.HasOne(d => d.CartRule)
                    .WithMany(p => p.PricingCartRuleCategory)
                    .HasForeignKey(d => d.CartRuleId);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.PricingCartRuleCategory)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<PricingCartRuleCustomerGroup>(entity =>
            {
                entity.HasKey(e => new { e.CartRuleId, e.CustomerGroupId });

                entity.ToTable("Pricing_CartRuleCustomerGroup");

                entity.HasIndex(e => e.CustomerGroupId);

                entity.HasOne(d => d.CartRule)
                    .WithMany(p => p.PricingCartRuleCustomerGroup)
                    .HasForeignKey(d => d.CartRuleId);

                entity.HasOne(d => d.CustomerGroup)
                    .WithMany(p => p.PricingCartRuleCustomerGroup)
                    .HasForeignKey(d => d.CustomerGroupId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<PricingCartRuleProduct>(entity =>
            {
                entity.HasKey(e => new { e.CartRuleId, e.ProductId });

                entity.ToTable("Pricing_CartRuleProduct");

                entity.HasIndex(e => e.ProductId);

                entity.HasOne(d => d.CartRule)
                    .WithMany(p => p.PricingCartRuleProduct)
                    .HasForeignKey(d => d.CartRuleId);

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.PricingCartRuleProduct)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<PricingCartRuleUsage>(entity =>
            {
                entity.ToTable("Pricing_CartRuleUsage");

                entity.HasIndex(e => e.CartRuleId);

                entity.HasIndex(e => e.CouponId);

                entity.HasIndex(e => e.UserId);

                entity.HasOne(d => d.CartRule)
                    .WithMany(p => p.PricingCartRuleUsage)
                    .HasForeignKey(d => d.CartRuleId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Coupon)
                    .WithMany(p => p.PricingCartRuleUsage)
                    .HasForeignKey(d => d.CouponId);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.PricingCartRuleUsage)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<PricingCatalogRule>(entity =>
            {
                entity.ToTable("Pricing_CatalogRule");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);
            });

            modelBuilder.Entity<PricingCatalogRuleCustomerGroup>(entity =>
            {
                entity.HasKey(e => new { e.CatalogRuleId, e.CustomerGroupId });

                entity.ToTable("Pricing_CatalogRuleCustomerGroup");

                entity.HasIndex(e => e.CustomerGroupId);

                entity.HasOne(d => d.CatalogRule)
                    .WithMany(p => p.PricingCatalogRuleCustomerGroup)
                    .HasForeignKey(d => d.CatalogRuleId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.CustomerGroup)
                    .WithMany(p => p.PricingCatalogRuleCustomerGroup)
                    .HasForeignKey(d => d.CustomerGroupId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<PricingCoupon>(entity =>
            {
                entity.ToTable("Pricing_Coupon");

                entity.HasIndex(e => e.CartRuleId);

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasMaxLength(450);

                entity.HasOne(d => d.CartRule)
                    .WithMany(p => p.PricingCoupon)
                    .HasForeignKey(d => d.CartRuleId);
            });

            modelBuilder.Entity<ProductComparisonComparingProduct>(entity =>
            {
                entity.ToTable("ProductComparison_ComparingProduct");

                entity.HasIndex(e => e.ProductId);

                entity.HasIndex(e => e.UserId);

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ProductComparisonComparingProduct)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.ProductComparisonComparingProduct)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<ProductRecentlyViewedRecentlyViewedProduct>(entity =>
            {
                entity.ToTable("ProductRecentlyViewed_RecentlyViewedProduct");
            });

            modelBuilder.Entity<ReviewsReply>(entity =>
            {
                entity.ToTable("Reviews_Reply");

                entity.HasIndex(e => e.ReviewId);

                entity.HasIndex(e => e.UserId);

                entity.HasOne(d => d.Review)
                    .WithMany(p => p.ReviewsReply)
                    .HasForeignKey(d => d.ReviewId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.ReviewsReply)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<ReviewsReview>(entity =>
            {
                entity.ToTable("Reviews_Review");

                entity.HasIndex(e => e.UserId);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.ReviewsReview)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<Schema>(entity =>
            {
                entity.HasKey(e => e.Version);

                entity.ToTable("Schema", "HangFire");

                entity.Property(e => e.Version).ValueGeneratedNever();
            });

            modelBuilder.Entity<SearchQuery>(entity =>
            {
                entity.ToTable("Search_Query");

                entity.Property(e => e.QueryText)
                    .IsRequired()
                    .HasMaxLength(500);
            });

            modelBuilder.Entity<Server>(entity =>
            {
                entity.ToTable("Server", "HangFire");

                entity.HasIndex(e => e.LastHeartbeat)
                    .HasName("IX_HangFire_Server_LastHeartbeat");

                entity.Property(e => e.Id)
                    .HasMaxLength(100)
                    .ValueGeneratedNever();

                entity.Property(e => e.LastHeartbeat).HasColumnType("datetime");
            });

            modelBuilder.Entity<Set>(entity =>
            {
                entity.HasKey(e => new { e.Key, e.Value });

                entity.ToTable("Set", "HangFire");

                entity.HasIndex(e => e.ExpireAt)
                    .HasName("IX_HangFire_Set_ExpireAt")
                    .HasFilter("([ExpireAt] IS NOT NULL)");

                entity.HasIndex(e => new { e.Key, e.Score })
                    .HasName("IX_HangFire_Set_Score");

                entity.Property(e => e.Key).HasMaxLength(100);

                entity.Property(e => e.Value).HasMaxLength(256);

                entity.Property(e => e.ExpireAt).HasColumnType("datetime");
            });

            modelBuilder.Entity<ShipmentsShipment>(entity =>
            {
                entity.ToTable("Shipments_Shipment");

                entity.HasIndex(e => e.CreatedById);

                entity.HasIndex(e => e.OrderId);

                entity.HasIndex(e => e.WarehouseId);

                entity.Property(e => e.TrackingNumber).HasMaxLength(450);

                entity.HasOne(d => d.CreatedBy)
                    .WithMany(p => p.ShipmentsShipment)
                    .HasForeignKey(d => d.CreatedById)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.ShipmentsShipment)
                    .HasForeignKey(d => d.OrderId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Warehouse)
                    .WithMany(p => p.ShipmentsShipment)
                    .HasForeignKey(d => d.WarehouseId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<ShipmentsShipmentItem>(entity =>
            {
                entity.ToTable("Shipments_ShipmentItem");

                entity.HasIndex(e => e.ProductId);

                entity.HasIndex(e => e.ShipmentId);

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ShipmentsShipmentItem)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Shipment)
                    .WithMany(p => p.ShipmentsShipmentItem)
                    .HasForeignKey(d => d.ShipmentId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<ShippingShippingProvider>(entity =>
            {
                entity.ToTable("Shipping_ShippingProvider");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);
            });

            modelBuilder.Entity<ShippingTableRatePriceAndDestination>(entity =>
            {
                entity.ToTable("ShippingTableRate_PriceAndDestination");

                entity.HasIndex(e => e.CountryId);

                entity.HasIndex(e => e.DistrictId);

                entity.HasIndex(e => e.StateOrProvinceId);

                entity.Property(e => e.ZipCode).HasMaxLength(450);

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.ShippingTableRatePriceAndDestination)
                    .HasForeignKey(d => d.CountryId);

                entity.HasOne(d => d.District)
                    .WithMany(p => p.ShippingTableRatePriceAndDestination)
                    .HasForeignKey(d => d.DistrictId);

                entity.HasOne(d => d.StateOrProvince)
                    .WithMany(p => p.ShippingTableRatePriceAndDestination)
                    .HasForeignKey(d => d.StateOrProvinceId);
            });

            modelBuilder.Entity<ShoppingCartCart>(entity =>
            {
                entity.ToTable("ShoppingCart_Cart");

                entity.HasIndex(e => e.CreatedById);

                entity.HasIndex(e => e.CustomerId);

                entity.Property(e => e.CreatedById).HasDefaultValueSql("(CONVERT([bigint],(0)))");

                entity.HasOne(d => d.CreatedBy)
                    .WithMany(p => p.ShoppingCartCartCreatedBy)
                    .HasForeignKey(d => d.CreatedById)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.ShoppingCartCartCustomer)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<ShoppingCartCartItem>(entity =>
            {
                entity.ToTable("ShoppingCart_CartItem");

                entity.HasIndex(e => e.CartId);

                entity.HasIndex(e => e.ProductId);

                entity.HasOne(d => d.Cart)
                    .WithMany(p => p.ShoppingCartCartItem)
                    .HasForeignKey(d => d.CartId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ShoppingCartCartItem)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<State>(entity =>
            {
                entity.HasKey(e => new { e.JobId, e.Id });

                entity.ToTable("State", "HangFire");

                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.Reason).HasMaxLength(100);

                entity.HasOne(d => d.Job)
                    .WithMany(p => p.State)
                    .HasForeignKey(d => d.JobId)
                    .HasConstraintName("FK_HangFire_State_Job");
            });

            modelBuilder.Entity<TaxTaxClass>(entity =>
            {
                entity.ToTable("Tax_TaxClass");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(450);
            });

            modelBuilder.Entity<TaxTaxRate>(entity =>
            {
                entity.ToTable("Tax_TaxRate");

                entity.HasIndex(e => e.CountryId);

                entity.HasIndex(e => e.StateOrProvinceId);

                entity.HasIndex(e => e.TaxClassId);

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.TaxTaxRate)
                    .HasForeignKey(d => d.CountryId);

                entity.HasOne(d => d.StateOrProvince)
                    .WithMany(p => p.TaxTaxRate)
                    .HasForeignKey(d => d.StateOrProvinceId);

                entity.HasOne(d => d.TaxClass)
                    .WithMany(p => p.TaxTaxRate)
                    .HasForeignKey(d => d.TaxClassId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<WishListWishList>(entity =>
            {
                entity.ToTable("WishList_WishList");

                entity.HasIndex(e => e.UserId);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.WishListWishList)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<WishListWishListItem>(entity =>
            {
                entity.ToTable("WishList_WishListItem");

                entity.HasIndex(e => e.ProductId);

                entity.HasIndex(e => e.WishListId);

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.WishListWishListItem)
                    .HasForeignKey(d => d.ProductId);

                entity.HasOne(d => d.WishList)
                    .WithMany(p => p.WishListWishListItem)
                    .HasForeignKey(d => d.WishListId);
            });
        }
    }
}
