using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SimplCommerce.Module.Cms.Areas.Cms.ViewModels
{
    public class PageVm
    {
        public string Body { get; set; }
        public long Id { get; set; }

        public string Name { get; set; }

        public string Slug { get; set; }
    }
}
