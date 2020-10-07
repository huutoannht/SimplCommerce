using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SimplCommerce.WebHost.Models
{
    public partial class PefcCompany
    {
        public PefcCompany()
        {
            PefcCertificateMapping = new HashSet<PefcCertificateMapping>();
        }

        public int Id { get; set; }
        [Display(Name = "Name of Company")]

        public string Name { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }
        public string Email { get; set; }
        public string Website { get; set; }
        public string Address { get; set; }

        public ICollection<PefcCertificateMapping> PefcCertificateMapping { get; set; }
    }
}
