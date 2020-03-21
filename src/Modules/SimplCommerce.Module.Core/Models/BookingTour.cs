using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SimplCommerce.Infrastructure.Models;

namespace SimplCommerce.Module.Core.Models
{
    public class BookingTour : EntityBase
    {
        public BookingTour() { }

        public BookingTour(long id)
        {
            Id = id;
        }

        public Int64? BookingTypeId { get; set; }

        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }

        public Int32? Count { get; set; }
        public Int32? CountAdult { get; set; }
        public Int32? CountChildren { get; set; }


        public string FlightNumber { get; set; }

        public DateTime? LandingTime { get; set; }

        public string AirportName { get; set; }

        public string Note { get; set; }
        public BookingType BookingType { get; set; }
    }
}
