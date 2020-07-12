﻿using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using SimplCommerce.Module.Catalog.Models;
using SimplCommerce.Module.Core.Models;

namespace SimplCommerce.Module.Catalog.Areas.Catalog.ViewModels
{
    public class ProductThumbnail
    {
        public long Id { get; set; }

        public string Name { get; set; }
        public string NameEN { get; set; }

        public string Slug { get; set; }

        public decimal Price { get; set; }

        public decimal? OldPrice { get; set; }

        public decimal? SpecialPrice { get; set; }

        public bool IsCallForPricing { get; set; }

        public bool IsAllowToOrder { get; set; }

        public int? StockQuantity { get; set; }

        public DateTimeOffset? SpecialPriceStart { get; set; }

        public DateTimeOffset? SpecialPriceEnd { get; set; }

        public Media ThumbnailImage { get; set; }

        public Media PromotionImage { get; set; }

        public string ThumbnailUrl { get; set; }

        public string PromotionImageUrl { get; set; }

        public int ReviewsCount { get; set; }

        public double? RatingAverage { get; set; }

        public CalculatedProductPrice CalculatedProductPrice { get; set; }

        public IList<ProductCategory> Categories { get; set; }
        public DateTimeOffset CreatedOn { get; private set; }
        public string ShortDescription { get;  set; }
        public string ShortDescriptionEN { get;  set; }
        public static ProductThumbnail FromProduct(Product product)
        {
            return new ProductThumbnail
            {
                Id = product.Id,
                Name = product.Name,
                NameEN = product.NameEN,
                Slug = product.Slug,
                Price = product.Price,
                OldPrice = product.OldPrice,
                SpecialPrice = product.SpecialPrice,
                SpecialPriceStart = product.SpecialPriceStart,
                SpecialPriceEnd = product.SpecialPriceEnd,
                StockQuantity = product.StockQuantity,
                IsAllowToOrder = product.IsAllowToOrder,
                IsCallForPricing = product.IsCallForPricing,
                ThumbnailImage = product.ThumbnailImage,
                PromotionImage=product.PromotionImage,
                ReviewsCount = product.ReviewsCount,
                RatingAverage = product.RatingAverage,
                Categories = product.Categories,
                CreatedOn = product.CreatedOn,
                ShortDescription = StripHTML(product.ShortDescription),
                ShortDescriptionEN = StripHTML(product.ShortDescriptionEN),
            };
        }
        public static  string StripHTML(string input)
        {
            if (string.IsNullOrEmpty(input))
            {
                return string.Empty;
            }
            return Regex.Replace(input, "<.*?>", String.Empty);
        }
    }
}
