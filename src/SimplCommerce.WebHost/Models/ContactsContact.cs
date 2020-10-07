﻿using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class ContactsContact
    {
        public long Id { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string EmailAddress { get; set; }
        public string Address { get; set; }
        public string Content { get; set; }
        public long ContactAreaId { get; set; }
        public bool IsDeleted { get; set; }
        public DateTimeOffset CreatedOn { get; set; }

        public ContactsContactArea ContactArea { get; set; }
    }
}
