using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class PefcProduct
    {
        public PefcProduct()
        {
            PefcCertificateMapping = new HashSet<PefcCertificateMapping>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string IndustrySector { get; set; }

        public ICollection<PefcCertificateMapping> PefcCertificateMapping { get; set; }
    }
}
