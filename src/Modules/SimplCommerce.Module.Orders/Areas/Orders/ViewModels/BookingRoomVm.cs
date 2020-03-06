using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc.Rendering;
using SimplCommerce.Infrastructure.Models;

namespace SimplCommerce.Module.Orders.Areas.Orders.ViewModels
{
    public class BookingRoomVm : ValidatableObject
    {
        [Required]
        public IList<SelectListItem> TypeRoom { get; set; }
        [Required]
        public Int32? TypeBookId { get; set; }
        [Required]
        public DateTime? FromDate { get; set; }

        [Required]
        public DateTime? ToDate { get; set; }

        [Required]
        public Int32? Count { get; set; }
        [Required]
        public Int32? CountAdult { get; set; }
        [Required]
        public Int32? CountChildren { get; set; }
    }
}
