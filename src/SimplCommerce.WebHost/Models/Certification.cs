using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SimplCommerce.WebHost.Models
{
    public partial class Certification
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Mời nhập tên công ty"), MaxLength(256)]
        [Display(Name = "Tên công ty:")]
        public string CompanyName { get; set; }
        [Display(Name = "Thông tin đại diện:")]


        public string CompanyInformationContactPersonName { get; set; }
        [Display(Name = "Địa chỉ:")]

        public string CompanyInformationAddress { get; set; }
		[Display(Name = "Địa chỉ tiếng anh:")]

        public string CompanyInformationAddressEN { get; set; }
        [Display(Name = "Email:")]
        [RegularExpression(@"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$", ErrorMessage = "Email không hợp lệ.")]

        public string CompanyInformationEmail { get; set; }
        [Display(Name = "SĐT:")]
        public string CompanyInformationPhone { get; set; }
		[Display(Name = "Fax:")]
        public string CompanyInformationFax { get; set; }
        [Display(Name = "Loại chứng chỉ:")]
        public string CertificationInformationTypeOfCertification { get; set; }
        [Display(Name = "Chứng chỉ:")]

        public string CertificationInformationCertificate { get; set; }
        [Display(Name = "Mã số chứng chỉ:")]

        public string CertificationInformationCertificateNumber { get; set; }
        [Display(Name = "Mã số chứng chỉ con:")]

        public string CertificationInformationSubCertificateNumber { get; set; }
        [Display(Name = "Tình trạng:")]

        public string CertificationInformationStatus { get; set; }
        [Display(Name = "Ngày hết hạn:")]
        [DataType(DataType.Date)]
        public DateTime? CertificationInformationExpiryDate { get; set; }
        [Display(Name = "Tên tổ chức chứng nhận:")]

        public string CertificationBodyName { get; set; }
        [Display(Name = "Địa chỉ:")]

        public string CertificationBodyAddress { get; set; }
        [Display(Name = "Số điện thoại:")]

        public string CertificationBodyPhone { get; set; }
        [Display(Name = "FAX:")]

        public string CertificationBodyFax { get; set; }
        [Display(Name = "Email:")]
        [DataType(DataType.EmailAddress)]
        [RegularExpression(@"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$", ErrorMessage = "Email không hợp lệ.")]

        public string CertificationBodyEmail { get; set; }
        [Display(Name = "Website:")]

        public string CertificationBodyWebsite { get; set; }
        [Display(Name = "Giấy phép số:")]

        public string LogoLisenceNumber { get; set; }
        [Display(Name = "Ngày hết hạn:")]
        [DataType(DataType.Date)]
        public DateTime? LogoLisenceExprityDate { get; set; }
        [Display(Name = "Sản phẩm:")]

        public string ProductsName { get; set; }
        [Display(Name = "Mô tả Sản phẩm:")]

        public string ProductsDescrition { get; set; }
        [Display(Name = "Loại sản phẩm 1:")]

        public string ProductsCategoriesLevel1 { get; set; }
        [Display(Name = "Loại sản phẩm 2:")]

        public string ProductsCategoriesLevel2 { get; set; }
        [Display(Name = "Loại sản phẩm 3:")]

        public string ProductsCategoriesLevel3 { get; set; }
    }
}
