using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SimplCommerce.WebHost.Models
{
    public partial class PefcCertificate
    {
        public PefcCertificate()
        {
            PefcCertificateMapping = new HashSet<PefcCertificateMapping>();
        }

        public int Id { get; set; }
        [Display(Name = "Certificate")]
        public string Name { get; set; }
        [Display(Name = "Type of certification")]

        public string Type { get; set; }
        [Display(Name = "Certificate number")]

        public string Number { get; set; }
        [Display(Name = "Sub certificate number")]

        public string SubNumber { get; set; }
        public string Status { get; set; }
        public DateTime? ExpiryDate { get; set; }
        public DateTime? CreatedAt { get; set; }
        public bool IsDeleted { get; set; }
        [Display(Name = "Certification body")]
        public string NameBody { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }
        public string Email { get; set; }
        public string Website { get; set; }

        public string LicenseNumber { get; set; }

        public ICollection<PefcCertificateMapping> PefcCertificateMapping { get; set; }
    }
}
