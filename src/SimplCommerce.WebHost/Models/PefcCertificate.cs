using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class PefcCertificate
    {
        public PefcCertificate()
        {
            PefcCertificateMapping = new HashSet<PefcCertificateMapping>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Number { get; set; }
        public string SubNumber { get; set; }
        public string Status { get; set; }
        public DateTime? ExpiryDate { get; set; }
        public DateTime? CreatedAt { get; set; }
        public bool IsDeleted { get; set; }
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
