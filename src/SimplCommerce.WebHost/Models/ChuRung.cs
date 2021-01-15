using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SimplCommerce.WebHost.Models
{
    public partial class ChuRung
    {
        public int Id { get; set; }
        [Required(ErrorMessage ="Mời nhập tên chủ rừng")]
        [Display(Name = "Tên chủ rừng")]
        public string TenChuRung { get; set; }
        [Display(Name = "Mã chủ rừng")]
        public string MaSo { get; set; }
        [Display(Name = "Tổ chức cấp chứng chỉ")]
        public string ToChuc { get; set; }
        [Display(Name = "Địa chỉ")]
        public string DiaChi { get; set; }
        [Display(Name = "Thời gian cấp")]
        public DateTime? ThoiGianCap { get; set; }
        [Display(Name = "Diện tích phòng hộ")]
        public double? DienTichPhongHo { get; set; }
        [Display(Name = "Diện tích đặc dụng")]
        public double? DienTichDacDung { get; set; }
        [Display(Name = "Diện tích sản xuất")]
        public double? DienTichSanXuat { get; set; }
        [Display(Name = "Loại chứng chỉ")]
        public string LoaiChungChi { get; set; }
        [Display(Name = "Loại rừng")]
        public string LoaiRung { get; set; }
    }
}
