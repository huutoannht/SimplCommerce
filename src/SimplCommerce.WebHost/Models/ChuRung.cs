using System;
using System.Collections.Generic;

namespace SimplCommerce.WebHost.Models
{
    public partial class ChuRung
    {
        public int Id { get; set; }
        public string TenChuRung { get; set; }
        public string MaSo { get; set; }
        public string ToChuc { get; set; }
        public string DiaChi { get; set; }
        public DateTime? ThoiGianCap { get; set; }
        public double? DienTichPhongHo { get; set; }
        public double? DienTichDacDung { get; set; }
        public double? DienTichSanXuat { get; set; }
        public string LoaiChungChi { get; set; }
        public string LoaiRung { get; set; }
    }
}
