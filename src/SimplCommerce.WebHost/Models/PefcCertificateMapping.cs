using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class PefcCertificateMapping
    {
        public int Id { get; set; }
        public int? ProductId { get; set; }
        public int? CertificateId { get; set; }
        public int? CompanyId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public bool IsDeleted { get; set; }

        public PefcCertificate Certificate { get; set; }
        public PefcCompany Company { get; set; }
        public PefcProduct Product { get; set; }
    }
}
