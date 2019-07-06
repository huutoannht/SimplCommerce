using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace SimplCommerce.Module.Catalog.Areas.Catalog.ViewModels
{ 
    public class ProductExport
    {
      
        public ProductExport()
        {
            Price = 0;
        }
        [Description("Mã sản phẩm")]
        public long Id { get; set; }

        [Description("Giá sản phẩm")]
        public decimal Price { get; set; }

        [Description("Tên sản phẩm")]
        public string Name { get; set; }
        [Description("Đường dẫn")]
        public string Slug { get; set; }

        public string MetaTitle { get; set; }

        public string MetaKeywords { get; set; }

        public string MetaDescription { get; set; }

        public string Sku { get; set; }

        public string Options { get; set; }

        public string Variations { get; set; }

        public string Attributes { get; set; }

        [Description("Ảnh sản phẩm")]
        public string ProductImages { get; set; }
        //public string ShortDescription { get; set; }

        //public string Description { get; set; }
    }
}
