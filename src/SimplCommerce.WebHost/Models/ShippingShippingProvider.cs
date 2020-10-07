using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class ShippingShippingProvider
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public bool IsEnabled { get; set; }
        public string ConfigureUrl { get; set; }
        public bool ToAllShippingEnabledCountries { get; set; }
        public string OnlyCountryIdsString { get; set; }
        public bool ToAllShippingEnabledStatesOrProvinces { get; set; }
        public string OnlyStateOrProvinceIdsString { get; set; }
        public string AdditionalSettings { get; set; }
        public string ShippingPriceServiceTypeName { get; set; }
    }
}
