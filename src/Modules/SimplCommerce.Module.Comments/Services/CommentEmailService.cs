using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.UI.Services;
using SimplCommerce.Infrastructure.Web;
using SimplCommerce.Module.Comments.Areas.Comments.ViewModels;
using SimplCommerce.Module.Comments.Models;

namespace SimplCommerce.Module.Comments.Services
{
    public class CommentEmailService: ICommentEmailService
    {
        private readonly IEmailSender _emailSender;
        private readonly IRazorViewRenderer _viewRender;
        public CommentEmailService(IEmailSender emailSender, IRazorViewRenderer viewRender)
        {
            _emailSender = emailSender;
            _viewRender = viewRender;
        }

        public async Task SendEmailToUser(string email, CommentEmail comment)
        {
            var emailBody = await _viewRender.RenderViewToStringAsync("/Areas/Comments/Views/EmailTemplates/CommentEmailToUser.cshtml", comment);
            var emailSubject = $"[laptopcu.com.vn] Bạn có comment mới.";
            await _emailSender.SendEmailAsync(email, emailSubject, emailBody);
        }
    }
}
