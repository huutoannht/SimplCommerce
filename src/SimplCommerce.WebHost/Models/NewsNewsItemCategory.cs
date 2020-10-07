using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class NewsNewsItemCategory
    {
        public long CategoryId { get; set; }
        public long NewsItemId { get; set; }

        public NewsNewsCategory Category { get; set; }
        public NewsNewsItem NewsItem { get; set; }
    }
}
