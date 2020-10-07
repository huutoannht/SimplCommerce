using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class OrdersOrderHistory
    {
        public long Id { get; set; }
        public long OrderId { get; set; }
        public int? OldStatus { get; set; }
        public int NewStatus { get; set; }
        public string OrderSnapshot { get; set; }
        public string Note { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public long CreatedById { get; set; }

        public CoreUser CreatedBy { get; set; }
        public OrdersOrder Order { get; set; }
    }
}
