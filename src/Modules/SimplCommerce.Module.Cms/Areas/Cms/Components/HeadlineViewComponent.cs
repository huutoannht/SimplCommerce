using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SimplCommerce.Infrastructure.Data;
using SimplCommerce.Infrastructure.Web;
using SimplCommerce.Module.Catalog.Models;
using SimplCommerce.Module.Cms.Areas.Cms.ViewModels;
using SimplCommerce.Module.Cms.Models;

namespace SimplCommerce.Module.Cms.Areas.Cms.Components
{
    public class HeadlineViewComponent : ViewComponent
    {
        private readonly IRepository<Product> _productRepository;

        public HeadlineViewComponent(IRepository<Product> productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var products = await _productRepository.Query().OrderByDescending(m => m.CreatedOn).Take(10).ToListAsync();
            var listProducts = new List<ProductForm>();
            foreach (var product in products)
            {
                listProducts.Add(Map(product));
            }
            return View(this.GetViewPath(), listProducts);
        }
        private ProductForm Map(Product product)
        {
            if (product is null)
            {
                return new ProductForm();
            }
            var productVm = new ProductForm
            {
                Name = product.Name,
                NameEN = product.NameEN,
                Slug = product.Slug,
            };
            return productVm;
        }
    }
}
