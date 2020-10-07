using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SimplCommerce.WebHost.Models
{
    public partial class PefcCertificateMapping
    {
        public int Id { get; set; }
        [Display(Name = "Production")]

        public int? ProductId { get; set; }
        [Display(Name = "Certification")]

        public int? CertificateId { get; set; }
        [Display(Name = "Company")]

        public int? CompanyId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public bool IsDeleted { get; set; }

        public PefcCertificate Certificate { get; set; }
        public PefcCompany Company { get; set; }
        public PefcProduct Product { get; set; }
    }
}
