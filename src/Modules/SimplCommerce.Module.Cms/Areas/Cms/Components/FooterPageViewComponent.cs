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
    public class FooterPageViewComponent : ViewComponent
    {
        private readonly IRepository<Page> _pageRepository;

        public FooterPageViewComponent(IRepository<Page> pageRepository)
        {
            _pageRepository = pageRepository;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var page = await _pageRepository.Query().FirstOrDefaultAsync(x => x.Name.ToLower().Contains("cuối trang"));

            return View(this.GetViewPath(), Map(page));
        }
        private PageForm Map(Page page)
        {
            if (page is null)
            {
                return new PageForm();
            }

            var pageVm = new PageForm
            {
                Id = page.Id,
                Name = page.Name,
                Body = page.Body 
            };
            return pageVm;
        }
    }
}
