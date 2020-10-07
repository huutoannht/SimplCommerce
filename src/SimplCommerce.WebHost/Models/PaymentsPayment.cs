﻿using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class PaymentsPayment
    {
        public long Id { get; set; }
        public long OrderId { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public decimal Amount { get; set; }
        public decimal PaymentFee { get; set; }
        public string PaymentMethod { get; set; }
        public string GatewayTransactionId { get; set; }
        public int Status { get; set; }
        public string FailureMessage { get; set; }
        public DateTimeOffset LatestUpdatedOn { get; set; }

        public OrdersOrder Order { get; set; }
    }
}
