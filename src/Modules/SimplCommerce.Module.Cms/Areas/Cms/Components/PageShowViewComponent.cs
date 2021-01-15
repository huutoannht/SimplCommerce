using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SimplCommerce.Infrastructure.Data;
using SimplCommerce.Infrastructure.Web;
using SimplCommerce.Module.Cms.Areas.Cms.ViewModels;
using SimplCommerce.Module.Cms.Models;

namespace SimplCommerce.Module.Cms.Areas.Cms.Components
{
    public class PageShowViewComponent : ViewComponent
    {
        private readonly IRepository<Page> _pageRepository;

        public PageShowViewComponent(IRepository<Page> pageRepository)
        {
            _pageRepository = pageRepository;
        }

        public async Task<IViewComponentResult> InvokeAsync(int? pageId)
        {
            var page = await _pageRepository.Query().FirstOrDefaultAsync(x => x.Id == pageId);
            var pageVm = Map(page);

            return View(this.GetViewPath(), pageVm);
        }

        private PageVm Map(Page page)
        {
            if (page==null)
            {
                return new PageVm();
            }
            var pageVm = new PageVm
            {
                Id = page.Id,
                Name = page.Name,
                Slug = page.Slug,
                Body = page.Body,
            };

            return pageVm;
        }
    }
}
