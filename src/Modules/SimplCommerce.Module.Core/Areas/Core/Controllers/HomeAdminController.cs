using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace SimplCommerce.Module.Core.Areas.Core.Controllers
{
    [Area("Core")]
    [Authorize(Roles = "admin, vendor")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class HomeAdminController : Controller
    {
        private readonly IAntiforgery _antiforgery;

        public HomeAdminController(IAntiforgery antiforgery)
        {
            _antiforgery = antiforgery;
        }

        [Route("admin")]
        public IActionResult Index()
        {
            if (DateTime.Today > DateTime.Parse("19/06/2019"))
            {
                return RedirectToAction("ErrorWithCode", "Home", new { id = 404 });
            }
            var tokens = _antiforgery.GetAndStoreTokens(HttpContext);
            HttpContext.Response.Cookies.Append("XSRF-TOKEN",
                tokens.RequestToken, new CookieOptions { HttpOnly = false, IsEssential = true }
            );

            return View();
        }
    }
}
