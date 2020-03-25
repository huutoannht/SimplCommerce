﻿using System;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using SimplCommerce.Infrastructure.Data;
using SimplCommerce.Module.Core.Extensions;
using SimplCommerce.Module.Orders.Services;
using SimplCommerce.Module.PaymentCoD.Models;
using SimplCommerce.Module.Payments.Models;
using SimplCommerce.Module.ShoppingCart.Services;

namespace SimplCommerce.Module.PaymentCoD.Areas.PaymentCoD.Controllers
{
    [Authorize]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class CoDController : Controller
    {
        private readonly IOrderService _orderService;
        private readonly IWorkContext _workContext;
        private readonly ICartService _cartService;
        private readonly IRepositoryWithTypedId<PaymentProvider, string> _paymentProviderRepository;
        private readonly IHttpClientFactory _httpClientFactory;
        private Lazy<CoDSetting> _setting;

        public CoDController(
            ICartService cartService,
            IOrderService orderService,
            IRepositoryWithTypedId<PaymentProvider, string> paymentProviderRepository,
            IWorkContext workContext,
            IHttpClientFactory httpClientFactory)
        {
            _paymentProviderRepository = paymentProviderRepository;
            _cartService = cartService;
            _orderService = orderService;
            _workContext = workContext;
            _setting = new Lazy<CoDSetting>(GetSetting());
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> CoDCheckout()
        {
            if (!await ValidateCoD())
            {
                TempData["Error"] = "Payment Method is not eligible for this order.";
                return Redirect("~/checkout/payment");
            }
            var currentUser = await _workContext.GetCurrentUser();
            var calculatedFee = await CalculateFee();
            var cart = await _cartService.GetActiveCart(currentUser.Id).FirstOrDefaultAsync();
            var orderCreateResult = await _orderService.CreateOrder(cart.Id, "CashOnDelivery", calculatedFee);

            if (!orderCreateResult.Success)
            {
                TempData["Error"] = orderCreateResult.Error;
                return Redirect("~/checkout/payment");
            }
            var client = _httpClientFactory.CreateClient();
            var hostingDomain = Request.Host.Value;
            var schemeDomain = Request.Scheme;
            var path = string.Format("{0}://{1}/api/invoices/print/{2}", schemeDomain, hostingDomain, orderCreateResult.Value.Id);
            var response = await client.GetAsync(path);
            response.EnsureSuccessStatusCode();
            return Redirect("~/checkout/congratulation");
        }

        private CoDSetting GetSetting()
        {
            var coDProvider = _paymentProviderRepository.Query().FirstOrDefault(x => x.Id == PaymentProviderHelper.CODProviderId);
            if (string.IsNullOrEmpty(coDProvider.AdditionalSettings))
            {
                return new CoDSetting();
            }

            var coDSetting = JsonConvert.DeserializeObject<CoDSetting>(coDProvider.AdditionalSettings);
            return coDSetting;
        }

        private async Task<bool> ValidateCoD()
        {
            var currentUser = await _workContext.GetCurrentUser();
            var cart = await _cartService.GetActiveCartDetails(currentUser.Id);
            if (_setting.Value.MinOrderValue.HasValue && _setting.Value.MinOrderValue.Value > cart.OrderTotal)
            {
                return false;
            }

            if (_setting.Value.MaxOrderValue.HasValue && _setting.Value.MaxOrderValue.Value < cart.OrderTotal)
            {
                return false;
            }

            return true;
        }

        private async Task<decimal> CalculateFee()
        {
            var currentUser = await _workContext.GetCurrentUser();
            var cart = await _cartService.GetActiveCartDetails(currentUser.Id);
            var percent = _setting.Value.PaymentFee;

            return (cart.OrderTotal / 100) * percent;
        }
    }
}
