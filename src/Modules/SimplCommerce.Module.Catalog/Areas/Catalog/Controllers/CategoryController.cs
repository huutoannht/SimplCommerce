using System;
using System.Linq;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using SimplCommerce.Infrastructure.Data;
using SimplCommerce.Module.Catalog.Areas.Catalog.ViewModels;
using SimplCommerce.Module.Catalog.Models;
using SimplCommerce.Module.Catalog.Services;
using SimplCommerce.Module.Core.Services;

namespace SimplCommerce.Module.Catalog.Areas.Catalog.Controllers
{
    [Area("Catalog")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class CategoryController : Controller
    {
        private int _pageSize;
        private readonly IRepository<Category> _categoryRepository;
        private readonly IMediaService _mediaService;
        private readonly IRepository<Product> _productRepository;
        private readonly IRepository<Brand> _brandRepository;
        private readonly IProductPricingService _productPricingService;

        public CategoryController(IRepository<Product> productRepository,
            IMediaService mediaService,
            IRepository<Category> categoryRepository,
            IRepository<Brand> brandRepository,
            IProductPricingService productPricingService,
            IConfiguration config)
        {
            _productRepository = productRepository;
            _mediaService = mediaService;
            _categoryRepository = categoryRepository;
            _brandRepository = brandRepository;
            _productPricingService = productPricingService;
            _pageSize = config.GetValue<int>("Catalog.ProductPageSize");
        }
        public IActionResult CategoryDetail(long id, SearchOption searchOption)
        {
            var host = "https://" + Request.Host + Request.Path;
            ViewBag.Host = host;
            var category = _categoryRepository.Query().FirstOrDefault(x => x.Id == id);
            if (category == null)
            {
                return Redirect("~/Error/FindNotFound");
            }

            var model = new ProductsByCategory
            {
                CategoryId = category.Id,
                ParentCategorId = category.ParentId,
                CategoryName = category.Name,
                CategorySlug = category.Slug,
                CategoryMetaTitle = category.MetaTitle,
                CategoryMetaKeywords = category.MetaKeywords,
                CategoryMetaDescription = category.MetaDescription,
                Description = category.Description,
                CurrentSearchOption = searchOption,
                FilterOption = new FilterOption()
            };

            var query = _productRepository
                .Query()
               // .OrderByDescending(m=>m.CreatedOn)
                .Where(x => x.Categories.Any(c => c.CategoryId == category.Id) && x.IsPublished && x.IsVisibleIndividually);

            if (query.Count() == 0)
            {
                model.TotalProduct = 0;
                return View(model);
            }

            AppendFilterOptionsToModel(model, query);

            if (searchOption.MinPrice.HasValue)
            {
                query = query.Where(x => x.Price >= searchOption.MinPrice.Value);
            }

            if (searchOption.MaxPrice.HasValue)
            {
                query = query.Where(x => x.Price <= searchOption.MaxPrice.Value);
            }

            if (string.Compare(model.CurrentSearchOption.Category, "all", StringComparison.OrdinalIgnoreCase) != 0)
            {
                var categories = searchOption.GetCategories();
                if (categories.Any())
                {
                    var categoryIds = _categoryRepository.Query().Where(x => categories.Contains(x.Slug)).Select(x => x.Id).ToList();
                    query = query.Where(x => x.Categories.Any(c => categoryIds.Contains(c.CategoryId)));
                }
            }
            var brands = searchOption.GetBrands();
            if (brands.Any())
            {
                var brandIds = _brandRepository.Query().Where(x => brands.Contains(x.Slug)).Select(x => x.Id).ToList();
                query = query.Where(x => x.BrandId.HasValue && brandIds.Contains(x.BrandId.Value));
            }

            model.TotalProduct = query.Count();
            var currentPageNum = searchOption.Page <= 0 ? 1 : searchOption.Page;
            var offset = (_pageSize * currentPageNum) - _pageSize;
            while (currentPageNum > 1 && offset >= model.TotalProduct)
            {
                currentPageNum--;
                offset = (_pageSize * currentPageNum) - _pageSize;
            }

            query = query
                .Include(x => x.Brand)
                .Include(x => x.Categories).ThenInclude(x=>x.Category)
                .Include(x => x.ThumbnailImage)
                .Include(x=>x.PromotionImage);

            query = ApplySort(searchOption, query);

            var products = query
                .Select(x => ProductThumbnail.FromProduct(x))
                .Skip(offset)
                .Take(_pageSize)
                .ToList();

            foreach (var product in products)
            {
                product.ThumbnailUrl = _mediaService.GetThumbnailUrl(product.ThumbnailImage);
                product.ShortDescription = StripHTML(product.ShortDescription);
                if (product.PromotionImage!=null)
                {
                    product.PromotionImageUrl = _mediaService.GetPromotionUrl(product.PromotionImage);
                    product.PromotionImage = product.PromotionImage;
                }
                product.CalculatedProductPrice = _productPricingService.CalculateProductPrice(product);
            }

            model.Products = products;
            model.CurrentSearchOption.PageSize = _pageSize;
            model.CurrentSearchOption.PageCount= System.Convert.ToInt32(System.Math.Ceiling(model.TotalProduct / System.Convert.ToDouble(_pageSize)));
            model.CurrentSearchOption.Page = currentPageNum;

            return View(model);
        }
        public string StripHTML(string input)
        {
            if (string.IsNullOrEmpty(input))
            {
                return string.Empty;
            }
            return Regex.Replace(input, "<.*?>", String.Empty);
        }
        public IActionResult CategoryHome(long id, SearchOption searchOption)
        {
            var host = "https://" + Request.Host + Request.Path;
            ViewBag.Host = host;
            if (id == 0)
            {
                id = 7;
            }
            var category = _categoryRepository.Query().FirstOrDefault(x => x.Id == id);
            if (category == null)
            {
                return Redirect("~/Error/FindNotFound");
            }

            var model = new ProductsByCategory
            {
                CategoryId = category.Id,
                ParentCategorId = category.ParentId,
                CategoryName = category.Name,
                CategorySlug = category.Slug,
                CategoryMetaTitle = category.MetaTitle,
                CategoryMetaKeywords = category.MetaKeywords,
                CategoryMetaDescription = category.MetaDescription,
                CurrentSearchOption = searchOption,
                FilterOption = new FilterOption()
            };

            var query = _productRepository
                .Query()
                // .OrderByDescending(m=>m.CreatedOn)
                .Where(x => x.Categories.Any(c => c.CategoryId == category.Id) && x.IsPublished && x.IsVisibleIndividually);

            if (query.Count() == 0)
            {
                model.TotalProduct = 0;
                return View(model);
            }

            AppendFilterOptionsToModel(model, query);

            if (searchOption.MinPrice.HasValue)
            {
                query = query.Where(x => x.Price >= searchOption.MinPrice.Value);
            }

            if (searchOption.MaxPrice.HasValue)
            {
                query = query.Where(x => x.Price <= searchOption.MaxPrice.Value);
            }

            if (string.Compare(model.CurrentSearchOption.Category, "all", StringComparison.OrdinalIgnoreCase) != 0)
            {
                var categories = searchOption.GetCategories();
                if (categories.Any())
                {
                    var categoryIds = _categoryRepository.Query().Where(x => categories.Contains(x.Slug)).Select(x => x.Id).ToList();
                    query = query.Where(x => x.Categories.Any(c => categoryIds.Contains(c.CategoryId)));
                }
            }
            var brands = searchOption.GetBrands();
            if (brands.Any())
            {
                var brandIds = _brandRepository.Query().Where(x => brands.Contains(x.Slug)).Select(x => x.Id).ToList();
                query = query.Where(x => x.BrandId.HasValue && brandIds.Contains(x.BrandId.Value));
            }

            model.TotalProduct = query.Count();
            var currentPageNum = searchOption.Page <= 0 ? 1 : searchOption.Page;
            var offset = (_pageSize * currentPageNum) - _pageSize;
            while (currentPageNum > 1 && offset >= model.TotalProduct)
            {
                currentPageNum--;
                offset = (_pageSize * currentPageNum) - _pageSize;
            }

            query = query
                .Include(x => x.Brand)
                .Include(x => x.Categories).ThenInclude(x => x.Category)
                .Include(x => x.ThumbnailImage)
                .Include(x => x.PromotionImage);

            query = ApplySort(searchOption, query);

            var products = query
                .Select(x => ProductThumbnail.FromProduct(x))
                .Skip(offset)
                .Take(_pageSize)
                .ToList();

            foreach (var product in products)
            {
                product.ThumbnailUrl = _mediaService.GetThumbnailUrl(product.ThumbnailImage);

                if (product.PromotionImage != null)
                {
                    product.PromotionImageUrl = _mediaService.GetPromotionUrl(product.PromotionImage);
                    product.PromotionImage = product.PromotionImage;
                }
                product.CalculatedProductPrice = _productPricingService.CalculateProductPrice(product);
            }

            model.Products = products;
            model.CurrentSearchOption.PageSize = _pageSize;
            model.CurrentSearchOption.PageCount = System.Convert.ToInt32(System.Math.Ceiling(model.TotalProduct / System.Convert.ToDouble(_pageSize)));
            model.CurrentSearchOption.Page = currentPageNum;

            return View("CategoryDetail",model);
        }

        public IActionResult CategoryDetailLoadMore(long id, SearchOption searchOption)
        {
            var category = _categoryRepository.Query().FirstOrDefault(x => x.Id == id);
            if (category == null)
            {
                return Redirect("~/Error/FindNotFound");
            }

            var model = new ProductsByCategory
            {
                CategoryId = category.Id,
                ParentCategorId = category.ParentId,
                CategoryName = category.Name,
                CategorySlug = category.Slug,
                CategoryMetaTitle = category.MetaTitle,
                CategoryMetaKeywords = category.MetaKeywords,
                CategoryMetaDescription = category.MetaDescription,
                CurrentSearchOption = searchOption,
                FilterOption = new FilterOption()
            };

            var query = _productRepository
                .Query()
                // .OrderByDescending(m=>m.CreatedOn)
                .Where(x => x.Categories.Any(c => c.CategoryId == category.Id) && x.IsPublished && x.IsVisibleIndividually);

            if (query.Count() == 0)
            {
                model.TotalProduct = 0;
                return View(model);
            }

            AppendFilterOptionsToModel(model, query);

            if (searchOption.MinPrice.HasValue)
            {
                query = query.Where(x => x.Price >= searchOption.MinPrice.Value);
            }

            if (searchOption.MaxPrice.HasValue)
            {
                query = query.Where(x => x.Price <= searchOption.MaxPrice.Value);
            }

            if (string.Compare(model.CurrentSearchOption.Category, "all", StringComparison.OrdinalIgnoreCase) != 0)
            {
                var categories = searchOption.GetCategories();
                if (categories.Any())
                {
                    var categoryIds = _categoryRepository.Query().Where(x => categories.Contains(x.Slug)).Select(x => x.Id).ToList();
                    query = query.Where(x => x.Categories.Any(c => categoryIds.Contains(c.CategoryId)));
                }
            }
            var brands = searchOption.GetBrands();
            if (brands.Any())
            {
                var brandIds = _brandRepository.Query().Where(x => brands.Contains(x.Slug)).Select(x => x.Id).ToList();
                query = query.Where(x => x.BrandId.HasValue && brandIds.Contains(x.BrandId.Value));
            }

            model.TotalProduct = query.Count();
            var currentPageNum = searchOption.Page <= 0 ? 1 : searchOption.Page;
            var offset = (_pageSize * currentPageNum) - _pageSize;
            while (currentPageNum > 1 && offset >= model.TotalProduct)
            {
                currentPageNum--;
                offset = (_pageSize * currentPageNum) - _pageSize;
            }

            query = query
                .Include(x => x.Brand)
                .Include(x => x.Categories).ThenInclude(x => x.Category)
                .Include(x => x.ThumbnailImage)
                .Include(x => x.PromotionImage);

            query = ApplySort(searchOption, query);

            var products = query
                .Select(x => ProductThumbnail.FromProduct(x))
                .Skip(offset)
                .Take(_pageSize)
                .ToList();

            foreach (var product in products)
            {
                product.ThumbnailUrl = _mediaService.GetThumbnailUrl(product.ThumbnailImage);

                if (product.PromotionImage != null)
                {
                    product.PromotionImageUrl = _mediaService.GetPromotionUrl(product.PromotionImage);
                    product.PromotionImage = product.PromotionImage;
                }
                product.CalculatedProductPrice = _productPricingService.CalculateProductPrice(product);
            }

            model.Products = products;
            model.CurrentSearchOption.PageSize = _pageSize;
            model.CurrentSearchOption.Page = currentPageNum;

            return View(model);
        }

        private static IQueryable<Product> ApplySort(SearchOption searchOption, IQueryable<Product> query)
        {
            var sortBy = searchOption.Sort ?? string.Empty;
            switch (sortBy.ToLower())
            {
                case "price-desc":
                    query = query.OrderByDescending(x => x.Price);
                    break;
                case "price-asc":
                    query = query.OrderBy(x => x.Price);
                    break;
                default:
                    query = query.OrderByDescending(x => x.CreatedOn);
                    break;
            }

            return query;
        }

        private  void AppendFilterOptionsToModel(ProductsByCategory model, IQueryable<Product> query)
        {
            model.FilterOption.Price.MaxPrice = query.Max(x => x.Price);
            model.FilterOption.Price.MinPrice = query.Min(x => x.Price);

            model.FilterOption.Categories = _categoryRepository.Query()
             .Where(m => m.ParentId != null)
             .GroupBy(x => new
             {
                 x.Id,
                 x.Name,
                 x.Slug,
                 x.ParentId
             })
             .Select(g => new FilterCategory
             {
                 Id = (int)g.Key.Id,
                 Name = g.Key.Name,
                 Slug = g.Key.Slug,
                 ParentId = g.Key.ParentId,
                 Count = g.Count()
             }).ToList();
            model.FilterOption.Brands = _brandRepository.Query()
                .Select(g => new FilterBrand
                {
                    Id = (int)g.Id,
                    Name = g.Name,
                    Slug = g.Slug
                }).ToList();
        }
    }
}
