using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class ReviewsReview
    {
        public ReviewsReview()
        {
            ReviewsReply = new HashSet<ReviewsReply>();
        }

        public long Id { get; set; }
        public long UserId { get; set; }
        public string Title { get; set; }
        public string Comment { get; set; }
        public int Rating { get; set; }
        public string ReviewerName { get; set; }
        public int Status { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public string EntityTypeId { get; set; }
        public long EntityId { get; set; }

        public CoreUser User { get; set; }
        public ICollection<ReviewsReply> ReviewsReply { get; set; }
    }
}
