using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SimplCommerce.WebHost.Models
{
    public partial class LocalizationResource
    {
        public long Id { get; set; }
        [Display(Name = "Key(tiếng việt)")]
        public string Key { get; set; }
        [Display(Name = "Value(tiếng anh)")]
        public string Value { get; set; }
        public string CultureId { get; set; }

        public LocalizationCulture Culture { get; set; }
    }
}
