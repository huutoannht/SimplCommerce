using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class OrdersOrder
    {
        public OrdersOrder()
        {
            InverseParent = new HashSet<OrdersOrder>();
            OrdersOrderHistory = new HashSet<OrdersOrderHistory>();
            OrdersOrderItem = new HashSet<OrdersOrderItem>();
            PaymentsPayment = new HashSet<PaymentsPayment>();
            ShipmentsShipment = new HashSet<ShipmentsShipment>();
        }

        public long Id { get; set; }
        public DateTimeOffset CreatedOn { get; set; }
        public DateTimeOffset LatestUpdatedOn { get; set; }
        public long CreatedById { get; set; }
        public long? VendorId { get; set; }
        public string CouponCode { get; set; }
        public string CouponRuleName { get; set; }
        public decimal DiscountAmount { get; set; }
        public decimal SubTotal { get; set; }
        public decimal SubTotalWithDiscount { get; set; }
        public long ShippingAddressId { get; set; }
        public long BillingAddressId { get; set; }
        public int OrderStatus { get; set; }
        public long? ParentId { get; set; }
        public string ShippingMethod { get; set; }
        public decimal ShippingFeeAmount { get; set; }
        public decimal TaxAmount { get; set; }
        public decimal OrderTotal { get; set; }
        public string PaymentMethod { get; set; }
        public decimal PaymentFeeAmount { get; set; }
        public bool IsMasterOrder { get; set; }
        public string OrderNote { get; set; }
        public long CustomerId { get; set; }
        public long LatestUpdatedById { get; set; }

        public OrdersOrderAddress BillingAddress { get; set; }
        public CoreUser CreatedBy { get; set; }
        public CoreUser Customer { get; set; }
        public CoreUser LatestUpdatedBy { get; set; }
        public OrdersOrder Parent { get; set; }
        public OrdersOrderAddress ShippingAddress { get; set; }
        public ICollection<OrdersOrder> InverseParent { get; set; }
        public ICollection<OrdersOrderHistory> OrdersOrderHistory { get; set; }
        public ICollection<OrdersOrderItem> OrdersOrderItem { get; set; }
        public ICollection<PaymentsPayment> PaymentsPayment { get; set; }
        public ICollection<ShipmentsShipment> ShipmentsShipment { get; set; }
    }
}
