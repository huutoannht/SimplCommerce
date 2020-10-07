using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class ReviewsReply
    {
        public long Id { get; set; }
        public long ReviewId { get; set; }
        public long UserId { get; set; }
        public string Comment { get; set; }
        public string ReplierName { get; set; }
        public int Status { get; set; }
        public DateTimeOffset CreatedOn { get; set; }

        public ReviewsReview Review { get; set; }
        public CoreUser User { get; set; }
    }
}
