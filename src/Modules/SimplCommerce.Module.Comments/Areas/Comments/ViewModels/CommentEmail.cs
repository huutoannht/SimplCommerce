using System;
using System.Collections.Generic;

namespace SimplCommerce.Module.Comments.Areas.Comments.ViewModels
{
    public class CommentEmail
    {
        public long Id { get; set; }

        public string CommentText { get; set; }

        public string CommenterName { get; set; }
        public string CommenterPhoneNumber { get; set; }

        public string EntitiesName { get; set; }
        public string EntitySlug { get; set; }

        public DateTimeOffset CreatedOn { get; set; }

        public IList<CommentItem> Replies { get; set; } = new List<CommentItem>();
        public string EntityTypeId { get; internal set; }
        public long EntityId { get; internal set; }
    }
}
