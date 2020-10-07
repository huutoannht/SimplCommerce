using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class CoreAppSetting
    {
        public string Id { get; set; }
        public string Value { get; set; }
        public string Module { get; set; }
        public bool IsVisibleInCommonSettingPage { get; set; }
    }
}
