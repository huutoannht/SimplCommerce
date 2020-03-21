using System;
using SimplCommerce.Infrastructure.Models;

namespace SimplCommerce.Module.Core.Models
{
    public class UserBookingTour : EntityBase
    {
        public long UserId { get; set; }

        public User User { get; set; }

        public long BookingTourId { get; set; }

        public BookingTour BookingTour { get; set; }

        public DateTimeOffset? LastUsedOn { get; set; }
    }
}
