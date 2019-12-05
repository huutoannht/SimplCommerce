using System.Threading.Tasks;
using SimplCommerce.Module.Comments.Areas.Comments.ViewModels;
using SimplCommerce.Module.Comments.Models;
using SimplCommerce.Module.Core.Models;

namespace SimplCommerce.Module.Comments.Services
{
    public interface ICommentEmailService
    {
        Task SendEmailToUser(string email, CommentEmail comment);
    }
}
