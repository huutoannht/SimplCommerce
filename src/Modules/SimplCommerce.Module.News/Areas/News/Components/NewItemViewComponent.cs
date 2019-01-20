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
    public class NewItemViewComponent : ViewComponent
    {
        private readonly IRepository<NewsItem> _newsItemRepository;
        private readonly IMediaService _mediaService;

        public NewItemViewComponent(IRepository<NewsItem> newItemRepository,
              IMediaService mediaService)
        {
            _newsItemRepository = newItemRepository;
            _mediaService = mediaService;
        }

        public IViewComponentResult Invoke()
        {

            var query = _newsItemRepository.Query().Include(x => x.ThumbnailImage)
                .Where(x => !x.IsDeleted).Take(4).OrderByDescending(m => m.CreatedOn);
            IList < NewsItem > listNewsItem = query.ToList();
            IList<NewsItemVm> newsItemVMs = new List<NewsItemVm>();
            NewsItemVm newsItemVm = null;
            foreach (var newsItem in listNewsItem)
            {
                newsItemVm = new NewsItemVm();
                newsItemVm.ThumbnailImageUrl = _mediaService.GetThumbnailUrl(newsItem.ThumbnailImage);
                newsItemVm.CreatedOn = newsItem.CreatedOn;
                newsItemVm.Slug = newsItem.Slug;
                newsItemVm.Name = newsItem.Name;
                newsItemVMs.Add(newsItemVm);
            }

            return View(this.GetViewPath(), newsItemVMs);
        }
    }
}
