using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class SearchQuery
    {
        public long Id { get; set; }
        public string QueryText { get; set; }
        public int ResultsCount { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
    }
}
