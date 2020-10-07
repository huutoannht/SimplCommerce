using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class NewsNewsCategory
    {
        public NewsNewsCategory()
        {
            NewsNewsItemCategory = new HashSet<NewsNewsItemCategory>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public string Slug { get; set; }
        public string MetaTitle { get; set; }
        public string MetaKeywords { get; set; }
        public string MetaDescription { get; set; }
        public string Description { get; set; }
        public int DisplayOrder { get; set; }
        public bool IsPublished { get; set; }
        public bool IsDeleted { get; set; }

        public ICollection<NewsNewsItemCategory> NewsNewsItemCategory { get; set; }
    }
}
