using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CommentsComment
    {
        public CommentsComment()
        {
            InverseParent = new HashSet<CommentsComment>();
        }

        public long Id { get; set; }
        public long UserId { get; set; }
        public string CommentText { get; set; }
        public string CommenterName { get; set; }
        public string CommenterPhoneNumber { get; set; }
        public int Status { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public string EntityTypeId { get; set; }
        public long EntityId { get; set; }
        public long? ParentId { get; set; }

        public CommentsComment Parent { get; set; }
        public CoreUser User { get; set; }
        public ICollection<CommentsComment> InverseParent { get; set; }
    }
}
