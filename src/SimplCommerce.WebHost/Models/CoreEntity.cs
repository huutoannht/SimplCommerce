using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CoreEntity
    {
        public CoreEntity()
        {
            CmsMenuItem = new HashSet<CmsMenuItem>();
        }

        public long Id { get; set; }
        public string Slug { get; set; }
        public string Name { get; set; }
        public long EntityId { get; set; }
        public string EntityTypeId { get; set; }

        public CoreEntityType EntityType { get; set; }
        public ICollection<CmsMenuItem> CmsMenuItem { get; set; }
    }
}
