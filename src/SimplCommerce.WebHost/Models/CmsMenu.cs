using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CmsMenu
    {
        public CmsMenu()
        {
            CmsMenuItem = new HashSet<CmsMenuItem>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public bool IsPublished { get; set; }
        public bool IsSystem { get; set; }

        public ICollection<CmsMenuItem> CmsMenuItem { get; set; }
    }
}
