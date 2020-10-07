using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CmsPage
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Slug { get; set; }
        public string MetaTitle { get; set; }
        public string MetaKeywords { get; set; }
        public string MetaDescription { get; set; }
        public bool IsPublished { get; set; }
        public DateTimeOffset? PublishedOn { get; set; }
        public bool IsDeleted { get; set; }
        public long CreatedById { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public DateTimeOffset LatestUpdatedOn { get; set; }
        public long LatestUpdatedById { get; set; }
        public string Body { get; set; }

        public CoreUser CreatedBy { get; set; }
        public CoreUser LatestUpdatedBy { get; set; }
    }
}
