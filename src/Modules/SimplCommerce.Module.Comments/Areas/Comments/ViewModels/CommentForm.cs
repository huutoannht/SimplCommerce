using System.ComponentModel.DataAnnotations;

namespace SimplCommerce.Module.Comments.Areas.Comments.ViewModels
{
    public class CommentForm
    {
        [Required(ErrorMessage = "Mời bạn nhập nội dung commnent.")]
        public string CommentText { get; set; }

        public string CommenterName { get; set; }
        [Required(ErrorMessage = "Mời bạn nhập số điện thoại.")]

        public string CommenterPhoneNumber { get; set; }

        public long? ParentId { get; set; }

        public long EntityId { get; set; }

        public string EntityTypeId { get; set; }
    }
}
