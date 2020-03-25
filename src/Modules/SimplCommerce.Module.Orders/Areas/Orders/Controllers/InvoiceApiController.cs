using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using SimplCommerce.Infrastructure.Data;
using SimplCommerce.Infrastructure.Web;
using SimplCommerce.Module.Core.Extensions;
using SimplCommerce.Module.Core.Services;
using SimplCommerce.Module.EmailSenderSmtp;
using SimplCommerce.Module.Orders.Areas.Orders.ViewModels;
using SimplCommerce.Module.Orders.Models;

namespace SimplCommerce.Module.Orders.Areas.Orders.Controllers
{
    [Area("Orders")]
    //[Authorize(Roles = "admin, vendor")]
    [Route("api/invoices")]
    public class InvoiceApiController : Controller
    {
        private readonly IRepository<Order> _orderRepository;
        private readonly IWorkContext _workContext;
        private readonly IRazorViewRenderer _viewRender;
        private readonly IPdfConverter _pdfConverter;
        private readonly string _userReceivedComment;
        private readonly IConfiguration _config;

        public InvoiceApiController(IRepository<Order> orderRepository, IWorkContext workContext, IRazorViewRenderer viewRender, 
            IPdfConverter pdfConverter,
             IConfiguration config)
        {
            _orderRepository = orderRepository;
            _workContext = workContext;
            _viewRender = viewRender;
            _pdfConverter = pdfConverter;
            _config = config;
            _userReceivedComment = config.GetValue<string>("Comment.EmailReceviced");
        }

        [HttpGet("print/{id}")]
        public async Task<IActionResult> Print(long id)
        {
            var order = await _orderRepository
                .Query()
                .Include(x => x.ShippingAddress).ThenInclude(x => x.District)
                .Include(x => x.ShippingAddress).ThenInclude(x => x.StateOrProvince)
                .Include(x => x.ShippingAddress).ThenInclude(x => x.Country)
                .Include(x => x.OrderItems).ThenInclude(x => x.Product)
                .Include(x => x.OrderItems).ThenInclude(x => x.Product).ThenInclude(x => x.OptionCombinations).ThenInclude(x => x.Option)
                .Include(x => x.Customer)
                .FirstOrDefaultAsync(x => x.Id == id);

            if (order == null)
            {
                return NotFound();
            }

            var currentUser = await _workContext.GetCurrentUser();
            //if (!User.IsInRole("admin") && order.VendorId != currentUser.VendorId)
            //{
            //    return BadRequest(new { error = "You don't have permission to manage this order" });
            //}

            var model = new OrderDetailVm
            {
                Id = order.Id,
                CreatedOn = order.CreatedOn,
                OrderStatus = (int)order.OrderStatus,
                OrderStatusString = order.OrderStatus.ToString(),
                CustomerId = order.CustomerId,
                CustomerName = order.Customer.FullName,
                CustomerEmail = order.Customer.Email,
                ShippingMethod = order.ShippingMethod,
                PaymentMethod = order.PaymentMethod,
                PaymentFeeAmount = order.PaymentFeeAmount,
                Subtotal = order.SubTotal,
                DiscountAmount = order.DiscountAmount,
                SubTotalWithDiscount = order.SubTotalWithDiscount,
                TaxAmount = order.TaxAmount,
                ShippingAmount = order.ShippingFeeAmount,
                OrderTotal = order.OrderTotal,
                ShippingAddress = new ShippingAddressVm
                {
                    AddressLine1 = order.ShippingAddress.AddressLine1,
                    CityName = order.ShippingAddress.City,
                    ZipCode = order.ShippingAddress.ZipCode,
                    ContactName = order.ShippingAddress.ContactName,
                    DistrictName = order.ShippingAddress.District?.Name,
                    StateOrProvinceName = order.ShippingAddress.StateOrProvince.Name,
                    Phone = order.ShippingAddress.Phone
                },
                OrderItems = order.OrderItems.Select(x => new OrderItemVm
                {
                    Id = x.Id,
                    ProductId = x.Product.Id,
                    ProductName = x.Product.Name,
                    ProductPrice = x.ProductPrice,
                    Quantity = x.Quantity,
                    DiscountAmount = x.DiscountAmount,
                    TaxAmount = x.TaxAmount,
                    TaxPercent = x.TaxPercent,
                    VariationOptions = OrderItemVm.GetVariationOption(x.Product)
                }).ToList()
            };

            var invoiceHtml = await _viewRender.RenderViewToStringAsync("/Areas/Orders/Views/Shared/InvoicePdf.cshtml", model);
            var emailSubject = $"[laptopcudanang.com.vn] Hệ thống nhận được order.";
            var emailSender = new EmailSender(_config);
            try
            {
                _ = Task.Run(() => emailSender.SendEmailAsync(_userReceivedComment, emailSubject, invoiceHtml, true));
            }
            catch (System.Exception ex)
            {

            }
            return StatusCode(Microsoft.AspNetCore.Http.StatusCodes.Status200OK);
            //byte[] pdf = _pdfConverter.Convert(invoiceHtml);
            //return File(pdf, "application/pdf", $"Invoice-{id}.pdf");
        }
    }
}
