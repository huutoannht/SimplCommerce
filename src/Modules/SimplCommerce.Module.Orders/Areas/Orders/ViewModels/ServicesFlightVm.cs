using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc.Rendering;
using SimplCommerce.Infrastructure.Models;

namespace SimplCommerce.Module.Orders.Areas.Orders.ViewModels
{
    public class ServicesFlightVm : ValidatableObject
    {
        public string FlightNumber { get; set; }
        public DateTime? LandingTime { get; set; }

        public string AirportName { get; set; }

        public string Note { get; set; }
    }
}
