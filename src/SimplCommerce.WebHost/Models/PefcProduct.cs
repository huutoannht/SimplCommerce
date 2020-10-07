using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SimplCommerce.WebHost.Models
{
    public partial class PefcProduct
    {
        public PefcProduct()
        {
            PefcCertificateMapping = new HashSet<PefcCertificateMapping>();
        }

        public int Id { get; set; }
        [Display(Name = "Product name")]

        public string Name { get; set; }
        [Display(Name = "Product type")]

        public string Type { get; set; }
        [Display(Name = "Industry sector")]

        public string IndustrySector { get; set; }

        public ICollection<PefcCertificateMapping> PefcCertificateMapping { get; set; }
    }
}
