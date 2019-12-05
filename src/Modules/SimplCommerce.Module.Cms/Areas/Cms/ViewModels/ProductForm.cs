using System.ComponentModel.DataAnnotations;

namespace SimplCommerce.Module.Cms.Areas.Cms.ViewModels
{
    public class ProductForm
    {
        public string Name { get; set; }
        public string Slug { get; set; }
        public string NameEN { get; internal set; }
    }
}
