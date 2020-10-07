using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CoreMedia
    {
        public CoreMedia()
        {
            CatalogCategory = new HashSet<CatalogCategory>();
            CatalogProduct = new HashSet<CatalogProduct>();
            CatalogProductMedia = new HashSet<CatalogProductMedia>();
            NewsNewsItem = new HashSet<NewsNewsItem>();
        }

        public long Id { get; set; }
        public string Caption { get; set; }
        public int FileSize { get; set; }
        public string FileName { get; set; }
        public int MediaType { get; set; }

        public ICollection<CatalogCategory> CatalogCategory { get; set; }
        public ICollection<CatalogProduct> CatalogProduct { get; set; }
        public ICollection<CatalogProductMedia> CatalogProductMedia { get; set; }
        public ICollection<NewsNewsItem> NewsNewsItem { get; set; }
    }
}
