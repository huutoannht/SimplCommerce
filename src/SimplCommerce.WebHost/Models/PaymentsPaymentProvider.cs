using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class PaymentsPaymentProvider
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public bool IsEnabled { get; set; }
        public string ConfigureUrl { get; set; }
        public string LandingViewComponentName { get; set; }
        public string AdditionalSettings { get; set; }
    }
}
