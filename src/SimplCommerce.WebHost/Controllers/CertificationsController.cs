using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using SimplCommerce.WebHost.Extensions;
using SimplCommerce.WebHost.Models;

namespace SimplCommerce.WebHost.Controllers
{
    public class CertificationsController : Controller
    {
        private readonly chungchirungContext _context;

        public CertificationsController(chungchirungContext context)
        {
            _context = context;
        }

        // GET: Certifications
        public async Task<IActionResult> Index()
        {
            if (HttpContext.Request.Headers["X-Requested-With"] == "XMLHttpRequest")
                return PartialView("_IndexGrid", _context.Certification.AsQueryable());
            return View( _context.Certification.AsQueryable());
        }

        [HttpGet("tim-chung-chi")]
        public async Task<IActionResult> Find(string certificateNumber, string companyName, string logoLicenseNumber,
           string typeCertification, string status, string productName, string typeProduct, string industrySector)
        {
            var pefcCertificateMapping = _context.Certification
              .AsNoTracking()
              .AsQueryable();
            if (!string.IsNullOrEmpty(certificateNumber))
            {
                pefcCertificateMapping = pefcCertificateMapping.Where(m => m.CertificationInformationCertificateNumber.Contains(certificateNumber));
            }
            if (!string.IsNullOrEmpty(companyName))
            {
                pefcCertificateMapping = pefcCertificateMapping.Where(m => m.CompanyName.Contains(companyName));

            }
            if (!string.IsNullOrEmpty(logoLicenseNumber))
            {
                pefcCertificateMapping = pefcCertificateMapping.Where(m => m.LogoLisenceNumber.Contains(logoLicenseNumber));

            }
            if (!string.IsNullOrEmpty(typeCertification))
            {
                pefcCertificateMapping = pefcCertificateMapping.Where(m => m.CertificationInformationTypeOfCertification.Contains(typeCertification));

            }
            if (!string.IsNullOrEmpty(status))
            {
                pefcCertificateMapping = pefcCertificateMapping.Where(m => m.CertificationInformationStatus.Contains(status));

            }
            if (!string.IsNullOrEmpty(productName))
            {
                pefcCertificateMapping = pefcCertificateMapping.Where(m => m.ProductsName.Contains(productName));

            }
            if (!string.IsNullOrEmpty(typeProduct))
            {
                //pefcCertificateMapping = pefcCertificateMapping.Where(m => m..Contains(typeProduct));

            }
            if (!string.IsNullOrEmpty(industrySector))
            {
                //pefcCertificateMapping = pefcCertificateMapping.Where(m => m.Int.Contains(industrySector));

            }

            var selection = CertificateExtension.GetDataSelection();
            ViewData["TypeProduct"] = new SelectList(selection.product_categories, "value", "label", typeProduct);
            ViewData["IndustrySector"] = new SelectList(selection.industry_sector, "value", "label", industrySector);

            ViewData["TypeCertification"] = new SelectList(selection.cb_type_of_certification, "value", "label", typeCertification);
            ViewData["Status"] = new SelectList(selection.certificate_status, "value", "label", status);
            var model = await pefcCertificateMapping.ToListAsync();
            //foreach (var item in model)
            //{
            //    item.Certificate.Type = selection.cb_type_of_certification.FirstOrDefault(m => m.value == item.Certificate.Type)?.label;
            //    item.Certificate.Status = selection.certificate_status.FirstOrDefault(m => m.value == item.Certificate.Status)?.label;
            //    item.Product.Type = selection.product_categories.FirstOrDefault(m => m.value == item.Product.Type)?.label;
            //    item.Product.IndustrySector = selection.industry_sector.FirstOrDefault(m => m.value == item.Product.IndustrySector)?.label;
            //}
            return View(model);
        }
        // GET: Certifications/Details/5
        [HttpGet("chung-chi/{id?}")]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var certification = await _context.Certification
                .FirstOrDefaultAsync(m => m.Id == id);
            if (certification == null)
            {
                return NotFound();
            }

            return View(certification);
        }

        // GET: Certifications/Create
        public IActionResult Create()
        {
            var selection = CertificateExtension.GetDataSelection();
            ViewData["ProductsCategoriesLevel1"] = new SelectList(selection.product_categories, "value", "label");
            ViewData["ProductsCategoriesLevel2"] = new SelectList(selection.product_categories, "value", "label");
            ViewData["ProductsCategoriesLevel3"] = new SelectList(selection.product_categories, "value", "label");
            ViewData["CertificationInformationStatus"] = new SelectList(selection.certificate_status, "value", "label");
            return View();
        }

        // POST: Certifications/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create( Certification certification, string[] ProductsCategoriesLevel1,
             string[] ProductsCategoriesLevel2, string[] ProductsCategoriesLevel3)
        {
            if (ModelState.IsValid)
            {
                certification.ProductsCategoriesLevel1 = string.Join("#", ProductsCategoriesLevel1);
                certification.ProductsCategoriesLevel2 = string.Join("#", ProductsCategoriesLevel2);
                certification.ProductsCategoriesLevel3 = string.Join("#", ProductsCategoriesLevel3);
                _context.Add(certification);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(certification);
        }

        // GET: Certifications/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var certification = await _context.Certification.FindAsync(id);
            if (certification == null)
            {
                return NotFound();
            }
            return View(certification);
        }

        // POST: Certifications/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,CompanyName,CompanyInformationContactPersonName,CompanyInformationAddress,CompanyInformationEmail,CertificationInformationTypeOfCertification,CertificationInformationCertificate,CertificationInformationCertificateNumber,CertificationInformationSubCertificateNumber,CertificationInformationStatus,CertificationInformationExpiryDate,CertificationBodyName,CertificationBodyAddress,CertificationBodyPhone,CertificationBodyFax,CertificationBodyEmail,CertificationBodyWebsite,LogoLisenceNumber,LogoLisenceExprityDate,Products")] Certification certification)
        {
            if (id != certification.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(certification);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CertificationExists(certification.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(certification);
        }

        // GET: Certifications/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var certification = await _context.Certification
                .FirstOrDefaultAsync(m => m.Id == id);
            if (certification == null)
            {
                return NotFound();
            }

            return View(certification);
        }

        // POST: Certifications/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var certification = await _context.Certification.FindAsync(id);
            _context.Certification.Remove(certification);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool CertificationExists(int id)
        {
            return _context.Certification.Any(e => e.Id == id);
        }
    }
}
