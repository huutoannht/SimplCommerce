using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using SimplCommerce.WebHost.Models;

namespace SimplCommerce.WebHost.Controllers
{
    public class CertificateMappingController : Controller
    {
        private readonly chungchirungContext _context;

        public CertificateMappingController(chungchirungContext context)
        {
            _context = context;
        }

        // GET: CertificateMapping
        public async Task<IActionResult> Index()
        {
            var chungchirungContext = _context.PefcCertificateMapping.Include(p => p.Certificate).Include(p => p.Company).Include(p => p.Product);
            return View(await chungchirungContext.ToListAsync());
        }

        // GET: CertificateMapping/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pefcCertificateMapping = await _context.PefcCertificateMapping
                .Include(p => p.Certificate)
                .Include(p => p.Company)
                .Include(p => p.Product)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (pefcCertificateMapping == null)
            {
                return NotFound();
            }

            return View(pefcCertificateMapping);
        }

        // GET: CertificateMapping/Create
        public IActionResult Create()
        {
            ViewData["CertificateId"] = new SelectList(_context.PefcCertificate, "Id", "Name");
            ViewData["CompanyId"] = new SelectList(_context.PefcCompany, "Id", "Name");
            ViewData["ProductId"] = new SelectList(_context.PefcProduct, "Id", "Name");
            return View();
        }

        // POST: CertificateMapping/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,ProductId,CertificateId,CompanyId,CreatedAt,IsDeleted")] PefcCertificateMapping pefcCertificateMapping)
        {
            if (ModelState.IsValid)
            {
                _context.Add(pefcCertificateMapping);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["CertificateId"] = new SelectList(_context.PefcCertificate, "Id", "Name", pefcCertificateMapping.CertificateId);
            ViewData["CompanyId"] = new SelectList(_context.PefcCompany, "Id", "Name", pefcCertificateMapping.CompanyId);
            ViewData["ProductId"] = new SelectList(_context.PefcProduct, "Id", "Name", pefcCertificateMapping.ProductId);
            return View(pefcCertificateMapping);
        }

        // GET: CertificateMapping/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pefcCertificateMapping = await _context.PefcCertificateMapping.FindAsync(id);
            if (pefcCertificateMapping == null)
            {
                return NotFound();
            }
            ViewData["CertificateId"] = new SelectList(_context.PefcCertificate, "Id", "Name", pefcCertificateMapping.CertificateId);
            ViewData["CompanyId"] = new SelectList(_context.PefcCompany, "Id", "Name", pefcCertificateMapping.CompanyId);
            ViewData["ProductId"] = new SelectList(_context.PefcProduct, "Id", "Name", pefcCertificateMapping.ProductId);
            return View(pefcCertificateMapping);
        }

        // POST: CertificateMapping/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,ProductId,CertificateId,CompanyId,CreatedAt,IsDeleted")] PefcCertificateMapping pefcCertificateMapping)
        {
            if (id != pefcCertificateMapping.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(pefcCertificateMapping);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PefcCertificateMappingExists(pefcCertificateMapping.Id))
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
            ViewData["CertificateId"] = new SelectList(_context.PefcCertificate, "Id", "Id", pefcCertificateMapping.CertificateId);
            ViewData["CompanyId"] = new SelectList(_context.PefcCompany, "Id", "Id", pefcCertificateMapping.CompanyId);
            ViewData["ProductId"] = new SelectList(_context.PefcProduct, "Id", "Id", pefcCertificateMapping.ProductId);
            return View(pefcCertificateMapping);
        }

        // GET: CertificateMapping/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pefcCertificateMapping = await _context.PefcCertificateMapping
                .Include(p => p.Certificate)
                .Include(p => p.Company)
                .Include(p => p.Product)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (pefcCertificateMapping == null)
            {
                return NotFound();
            }

            return View(pefcCertificateMapping);
        }

        // POST: CertificateMapping/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var pefcCertificateMapping = await _context.PefcCertificateMapping.FindAsync(id);
            _context.PefcCertificateMapping.Remove(pefcCertificateMapping);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool PefcCertificateMappingExists(int id)
        {
            return _context.PefcCertificateMapping.Any(e => e.Id == id);
        }
    }
}
