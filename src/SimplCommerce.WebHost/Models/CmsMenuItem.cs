using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CmsMenuItem
    {
        public CmsMenuItem()
        {
            InverseParent = new HashSet<CmsMenuItem>();
        }

        public long Id { get; set; }
        public long? ParentId { get; set; }
        public long MenuId { get; set; }
        public long? EntityId { get; set; }
        public string CustomLink { get; set; }
        public string Name { get; set; }
        public int DisplayOrder { get; set; }

        public CoreEntity Entity { get; set; }
        public CmsMenu Menu { get; set; }
        public CmsMenuItem Parent { get; set; }
        public ICollection<CmsMenuItem> InverseParent { get; set; }
    }
}
