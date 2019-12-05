using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class LocalizationResource
    {
        public long Id { get; set; }
        public string Key { get; set; }
        public string Value { get; set; }
        public string CultureId { get; set; }

        public LocalizationCulture Culture { get; set; }
    }
}
