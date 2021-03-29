using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using SimplCommerce.Infrastructure.Data;
using SimplCommerce.Infrastructure.Web;
using SimplCommerce.Module.Catalog.Areas.Catalog.ViewModels;
using SimplCommerce.Module.Catalog.Models;
using SimplCommerce.Module.Catalog.Services;
using SimplCommerce.Module.Core.Areas.Core.ViewModels;
using SimplCommerce.Module.Core.Services;

namespace SimplCommerce.Module.Catalog.Areas.Catalog.Components
{
    public class ProductWidgetByCategoryViewComponent : ViewComponent
    {
        private readonly IRepository<Product> _productRepository;
        private readonly IMediaService _mediaService;
        private readonly IProductPricingService _productPricingService;

        public ProductWidgetByCategoryViewComponent(IRepository<Product> productRepository, IMediaService mediaService, IProductPricingService productPricingService)
        {
            _productRepository = productRepository;
            _mediaService = mediaService;
            _productPricingService = productPricingService;
        }

        public IViewComponentResult Invoke(List<long> ids)
        {

            var query = _productRepository.Query().Include(m=>m.Categories)
              .Where(x => x.IsPublished  && x.Categories.Any(m => ids.Contains(m.CategoryId))).OrderByDescending(m=>m.CreatedOn).Take(3);

            var model = query.ToList();
            List<ProductThumbnail> products = new List<ProductThumbnail>();

            foreach (var product in model)
            {
                var productThumbnail = new ProductThumbnail();
                productThumbnail.ThumbnailUrl = _mediaService.GetThumbnailUrl(product.ThumbnailImage);
                productThumbnail.CreatedOn = product.CreatedOn;
                productThumbnail.Name = product.Name;
                productThumbnail.NameEN = product.NameEN;
                productThumbnail.Slug = product.Slug;
                products.Add(productThumbnail);
            }

            return View(this.GetViewPath(), products);
        }
    }
}
