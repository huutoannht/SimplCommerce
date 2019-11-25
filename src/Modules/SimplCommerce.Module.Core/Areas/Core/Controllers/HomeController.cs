using System;
using System.Linq;
using System.Xml;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using SimplCommerce.Infrastructure.Data;
using SimplCommerce.Module.Core.Areas.Core.ViewModels;
using SimplCommerce.Module.Core.Data;
using SimplCommerce.Module.Core.Models;
using SimplCommerce.Module.Core.Services;

namespace SimplCommerce.Module.Core.Areas.Core.Controllers
{
    [Area("Core")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class HomeController : Controller
    {
        private readonly ILogger _logger;
        private readonly IWidgetInstanceService _widgetInstanceService;
        private readonly IRepository<Entity> _entityRepository;
        private readonly DbContext _dbContext;
        private static int count = 1;
        public HomeController(ILoggerFactory factory, IWidgetInstanceService widgetInstanceService,
            IRepository<Entity> entityRepository, SimplDbContext dbContext)
        {
            _logger = factory.CreateLogger("Unhandled Error");
            _widgetInstanceService = widgetInstanceService;
            _entityRepository = entityRepository;
            _dbContext = dbContext;
            _dbContext.Database.SetCommandTimeout(180);
        }

        public IActionResult TestError()
        {
            throw new Exception("Test behavior in case of error");
        }

        [HttpGet("/template-demo")]
        public IActionResult Index()
        {
            var model = new HomeViewModel();
            ViewBag.Host = "demo";
            model.WidgetInstances = _widgetInstanceService.GetPublished()
                .OrderBy(x => x.DisplayOrder)
                .Select(x => new WidgetInstanceViewModel
                {
                    Id = x.Id,
                    Name = x.Name,
                    ViewComponentName = x.Widget.ViewComponentName,
                    WidgetId = x.WidgetId,
                    WidgetZoneId = x.WidgetZoneId,
                    Data = x.Data,
                    HtmlData = x.HtmlData
                }).ToList();

            return View(model);
        }
        [Route("/sitemap.xml")]
        public void SitemapXml()
        {
            string host = Request.Scheme + "://" + Request.Host;

            Response.ContentType = "application/xml";

            using (var xml = XmlWriter.Create(Response.Body, new XmlWriterSettings { Indent = true }))
            {
                xml.WriteStartDocument();

                xml.WriteStartElement("urlset", "http://www.sitemaps.org/schemas/sitemap/0.9");
                var listEntity = _entityRepository.Query().OrderBy(m => m.EntityTypeId).ToList();
                xml.WriteStartElement("url");
                xml.WriteElementString("loc", host);
                xml.WriteElementString("lastmod", DateTime.Today.ToString("yyyy-MM-dd"));
                xml.WriteElementString("priority", "1");
                xml.WriteEndElement();
                foreach (var item in listEntity)
                {
                    xml.WriteStartElement("url");
                    xml.WriteElementString("loc", host + "/" + item.Slug);
                    xml.WriteElementString("lastmod", DateTime.Today.ToString("yyyy-MM-dd"));
                    xml.WriteElementString("priority", "0.8");
                    xml.WriteEndElement();
                }
                xml.WriteEndElement();
            }
        }

        [HttpGet("/Home/ErrorWithCode/{statusCode}")]
        public IActionResult ErrorWithCode(int statusCode)
        {
            if (statusCode == 404)
            {
                return View("404");
            }

            return View("Error");
        }
        [HttpGet("/Home/HealBeat")]
        public IActionResult HealBeat()
        {
            try
            {
                count++;
                if (count % 60 == 0)
                {
                    string textSQL = @"
                 TRUNCATE TABLE [HangFire].[AggregatedCounter]
                GO
                TRUNCATE TABLE [HangFire].[Counter]
                GO
                TRUNCATE TABLE [HangFire].[JobParameter]
                GO
                TRUNCATE TABLE [HangFire].[JobQueue]
                GO
                TRUNCATE TABLE [HangFire].[List]
                GO
                TRUNCATE TABLE [HangFire].[State]
                GO
                DELETE FROM [HangFire].[Job]
                GO
                DBCC CHECKIDENT ('[HangFire].[Job]', reseed, 0)
                GO
                UPDATE [HangFire].[Hash] SET Value = 1 WHERE Field = 'LastJobId'
               ";
                    var parts = textSQL.Split(new string[] { "GO" }, System.StringSplitOptions.None);
                    foreach (var part in parts)
                    {

                        _dbContext.Database.ExecuteSqlCommand(part.Trim());
                    }
                    _dbContext.SaveChanges();
                    count = 0;
                }
                return Ok(count);
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public IActionResult Error()
        {
            var feature = HttpContext.Features.Get<IExceptionHandlerFeature>();
            var error = feature?.Error;

            if (error != null)
            {
                _logger.LogError(error.Message, error);
            }

            return View("Error");
        }
    }
}
