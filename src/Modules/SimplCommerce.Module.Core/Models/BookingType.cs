using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SimplCommerce.Infrastructure.Models;

namespace SimplCommerce.Module.Core.Models
{
    public class BookingType : EntityBase
    {
        public BookingType() { }

        public BookingType(long id)
        {
            Id = id;
        }
        public string Name { get; set; }
        public bool IsDeleted { get; set; }
    }
}
