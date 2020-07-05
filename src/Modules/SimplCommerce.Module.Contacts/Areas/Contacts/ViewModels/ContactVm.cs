using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SimplCommerce.Module.Contacts.Areas.Contacts.ViewModels
{
    public class ContactVm
    {
        [Required(ErrorMessage = "Mời nhập họ tên.")]
        public string FullName { get; set; }

        [Required(ErrorMessage = "Mời nhập số điện thoại.")]
        public string PhoneNumber { get; set; }

        [Required(ErrorMessage = "Mời nhập địa chỉ email")]
        [EmailAddress(ErrorMessage = "Mời nhập đúng định dạng email")]
        public string EmailAddress { get; set; }

        [Required(ErrorMessage = "Mời nhập địa chỉ.")]
        public string Address { get; set; }
        [Required(ErrorMessage = "Mời nhập nội dung.")]
        public string Content { get; set; }

        public long ContactAreaId { get; set; }

        public IList<ContactAreaVm> ContactAreas { get; set; } = new List<ContactAreaVm>();

        public CompanyInformation Company { get; set; }
    }
}
