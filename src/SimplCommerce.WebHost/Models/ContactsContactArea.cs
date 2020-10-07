using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class ContactsContactArea
    {
        public ContactsContactArea()
        {
            ContactsContact = new HashSet<ContactsContact>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public bool IsDeleted { get; set; }

        public ICollection<ContactsContact> ContactsContact { get; set; }
    }
}
