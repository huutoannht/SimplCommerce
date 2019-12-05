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
    public class CertificatesController : Controller
    {
        private readonly chungchirungContext _context;

        public CertificatesController(chungchirungContext context)
        {
            _context = context;
        }

        // GET: Certificates
        public async Task<IActionResult> Index()
        {
            var model = await _context.PefcCertificate.ToListAsync();
            var selection = CertificateExtension.GetDataSelection();
            foreach (var item in model)
            {
                item.Type = selection.cb_type_of_certification.FirstOrDefault(m => m.value == item.Type)?.label;
                item.Status = selection.certificate_status.FirstOrDefault(m => m.value == item.Status)?.label;
            }
            return View(model);
        }
       
        // GET: Certificates/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pefcCertificate = await _context.PefcCertificate
                .FirstOrDefaultAsync(m => m.Id == id);
            if (pefcCertificate == null)
            {
                return NotFound();
            }

            return View(pefcCertificate);
        }

        // GET: Certificates/Create
        public IActionResult Create()
        {
            var selection = CertificateExtension.GetDataSelection();
            ViewData["Type"] = new SelectList(selection.cb_type_of_certification, "value", "label");
            ViewData["Status"] = new SelectList(selection.certificate_status, "value", "label");
            return View();
        }

        // POST: Certificates/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,Type,Number,SubNumber,Status,ExpiryDate,CreatedAt,IsDeleted,NameBody,Address,Phone,Fax,Email,Website")] PefcCertificate pefcCertificate)
        {
            if (ModelState.IsValid)
            {
                _context.Add(pefcCertificate);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(pefcCertificate);
        }

        // GET: Certificates/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pefcCertificate = await _context.PefcCertificate.FindAsync(id); var selection = CertificateExtension.GetDataSelection();
            ViewData["Type"] = new SelectList(selection.cb_type_of_certification, "value", "label", pefcCertificate.Type);
            ViewData["Status"] = new SelectList(selection.certificate_status, "value", "label", pefcCertificate.Status);
            if (pefcCertificate == null)
            {
                return NotFound();
            }
            return View(pefcCertificate);
        }

        // POST: Certificates/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name,Type,Number,SubNumber,Status,ExpiryDate,CreatedAt,IsDeleted,NameBody,Address,Phone,Fax,Email,Website")] PefcCertificate pefcCertificate)
        {
            if (id != pefcCertificate.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(pefcCertificate);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PefcCertificateExists(pefcCertificate.Id))
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
            return View(pefcCertificate);
        }

        // GET: Certificates/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pefcCertificate = await _context.PefcCertificate
                .FirstOrDefaultAsync(m => m.Id == id);
            if (pefcCertificate == null)
            {
                return NotFound();
            }

            return View(pefcCertificate);
        }

        // POST: Certificates/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var pefcCertificate = await _context.PefcCertificate.FindAsync(id);
            _context.PefcCertificate.Remove(pefcCertificate);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool PefcCertificateExists(int id)
        {
            return _context.PefcCertificate.Any(e => e.Id == id);
        }
    }
}
