using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace SimplCommerce.Module.Catalog.Areas.Catalog.ViewModels
{
    public class ProductWidgetSetting
    {
        public int NumberOfProducts { get; set; }

        public long? CategoryId { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public ProductWidgetOrderBy OrderBy { get; set; }

        public bool FeaturedOnly { get; set; }

        public string Image { get; set; }

        public string ImageUrl { get; set; }

        public string AltImage { get; set; }

        public string HrefImage { get; set; }

        public string LinkWidget { get; set; }

    }
}
