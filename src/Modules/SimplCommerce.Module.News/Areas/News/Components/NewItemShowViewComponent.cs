using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SimplCommerce.Infrastructure.Data;
using SimplCommerce.Infrastructure.Web;
using SimplCommerce.Module.Core.Services;
using SimplCommerce.Module.News.Areas.News.ViewModels;
using SimplCommerce.Module.News.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SimplCommerce.Module.News.Areas.News.Components
{
    public class NewItemShowViewComponent : ViewComponent
    {
        private readonly IRepository<NewsItem> _newsItemRepository;
        private readonly IMediaService _mediaService;

        public NewItemShowViewComponent(IRepository<NewsItem> newItemRepository,
              IMediaService mediaService)
        {
            _newsItemRepository = newItemRepository;
            _mediaService = mediaService;
        }

        public IViewComponentResult Invoke(int? id)
        {
            var query = _newsItemRepository.Query().Include(x => x.ThumbnailImage)
                .Where(x => !x.IsDeleted && x.Id == id);
            NewsItem newsItem = query.FirstOrDefault();
            if (newsItem != null)
            {
                IList<NewsItemVm> newsItemVMs = new List<NewsItemVm>();
                NewsItemVm newsItemVm = null;

                newsItemVm = new NewsItemVm();
                newsItemVm.ThumbnailImageUrl = _mediaService.GetThumbnailUrl(newsItem.ThumbnailImage);
                newsItemVm.CreatedOn = newsItem.CreatedOn;
                newsItemVm.Slug = newsItem.Slug;
                newsItemVm.Name = newsItem.Name;
                newsItemVm.FullContent = newsItem.FullContent;
                return View(this.GetViewPath(), newsItemVm);
            }
            return View(this.GetViewPath());

        }
    }
}
