using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class LocalizationCulture
    {
        public LocalizationCulture()
        {
            LocalizationResource = new HashSet<LocalizationResource>();
        }

        public string Id { get; set; }
        public string Name { get; set; }

        public ICollection<LocalizationResource> LocalizationResource { get; set; }
    }
}
