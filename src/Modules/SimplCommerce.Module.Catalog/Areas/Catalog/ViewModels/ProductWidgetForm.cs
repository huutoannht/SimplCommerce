using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using SimplCommerce.Module.Core.Areas.Core.ViewModels;

namespace SimplCommerce.Module.Catalog.Areas.Catalog.ViewModels
{
    public class ProductWidgetForm : WidgetFormBase
    {
        public IFormFile UploadImage { get; set; }
        public ProductWidgetSetting Setting { get; set; }
    }
}
