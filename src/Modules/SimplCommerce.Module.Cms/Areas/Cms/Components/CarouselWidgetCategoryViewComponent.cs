using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SimplCommerce.Infrastructure.Web;
using SimplCommerce.Module.Cms.Areas.Cms.ViewModels;
using SimplCommerce.Module.Core.Areas.Core.ViewModels;
using SimplCommerce.Module.Core.Models;
using SimplCommerce.Module.Core.Services;

namespace SimplCommerce.Module.Cms.Areas.Cms.Components
{
    public class CarouselWidgetCategoryViewComponent : ViewComponent
    {
        private IMediaService _mediaService;
        private readonly IWidgetInstanceService _widgetInstanceService;

        public CarouselWidgetCategoryViewComponent(IMediaService mediaService,
            IWidgetInstanceService widgetInstanceService)
        {
            _mediaService = mediaService;
            _widgetInstanceService = widgetInstanceService;
        }

        public IViewComponentResult Invoke()
        {
           var widgetInstance = _widgetInstanceService.GetPublished()
                .Where(x => x.WidgetZoneId == WidgetZoneIds.HomeFeatured)
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
                }).FirstOrDefault();

            var model = new CarouselWidgetViewComponentVm
            {
                Id = widgetInstance.Id,
                Items = JsonConvert.DeserializeObject<IList<CarouselWidgetViewComponentItemVm>>(widgetInstance.Data)
            };

            foreach (var item in model.Items)
            {
                item.Image = _mediaService.GetMediaUrl(item.Image);
            }

            return View(this.GetViewPath(), model);
        }
    }
}
