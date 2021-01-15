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
    public class ChuRungController : Controller
    {
        private readonly chungchirungContext _context;

        public ChuRungController(chungchirungContext context)
        {
            _context = context;
        }

        // GET: ChuRung
        public async Task<IActionResult> Index()
        {
            return View(await _context.ChuRung.ToListAsync());
        }

        // GET: ChuRung/Details/5
        [HttpGet("/chungchi")]
        public async Task<IActionResult> ChungChi([FromQuery] string loairung, [FromQuery] string chungchi)
        {
            var selection = CertificateExtension.GetDataSelection();
            ViewData["LoaiChungChi"] = selection.loaichungchi;
            ViewData["LoaiRung"] = selection.loairung;
            var chuRung =  _context.ChuRung.AsQueryable();
            if (chuRung == null)
            {
                return NotFound();
            }

            if (!string.IsNullOrEmpty(loairung))
            {
                chuRung = chuRung.Where(m => m.LoaiRung.Contains(loairung));
            }
            if (!string.IsNullOrEmpty(chungchi))
            {
                chuRung = chuRung.Where(m => m.LoaiChungChi.Contains(chungchi));
            }
            var model = await chuRung.ToListAsync();
            foreach (var item in model)
            {
                item.LoaiChungChi = selection.loaichungchi.Where(m => m.value == item.LoaiChungChi).FirstOrDefault()?.label;
                item.LoaiRung = selection.loairung.Where(m => m.value == item.LoaiRung).FirstOrDefault()?.label;
            }
            return View("Details",model);
        }

        // GET: ChuRung/Create
        public IActionResult Create()
        {
            var selection = CertificateExtension.GetDataSelection();
            ViewData["LoaiChungChi"] = new SelectList(selection.loaichungchi, "value", "label");
            ViewData["LoaiRung"] = new SelectList(selection.loairung, "value", "label");
            return View();
        }

        // POST: ChuRung/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(  ChuRung chuRung)
        {
            if (ModelState.IsValid)
            {
                _context.Add(chuRung);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            var selection = CertificateExtension.GetDataSelection();
            ViewData["LoaiChungChi"] = new SelectList(selection.loaichungchi, "value", "label");
            ViewData["LoaiRung"] = new SelectList(selection.loairung, "value", "label");
            return View(chuRung);
        }

        // GET: ChuRung/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var chuRung = await _context.ChuRung.FindAsync(id);
            if (chuRung == null)
            {
                return NotFound();
            }
            var selection = CertificateExtension.GetDataSelection();
            ViewData["LoaiChungChi"] = new SelectList(selection.loaichungchi, "value", "label");
            ViewData["LoaiRung"] = new SelectList(selection.loairung, "value", "label");
            return View(chuRung);
        }

        // POST: ChuRung/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, ChuRung chuRung)
        {
            if (id != chuRung.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(chuRung);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ChuRungExists(chuRung.Id))
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
            var selection = CertificateExtension.GetDataSelection();
            ViewData["LoaiChungChi"] = new SelectList(selection.loaichungchi, "value", "label");
            ViewData["LoaiRung"] = new SelectList(selection.loairung, "value", "label");
            return View(chuRung);
        }

        // GET: ChuRung/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var chuRung = await _context.ChuRung
                .FirstOrDefaultAsync(m => m.Id == id);
            if (chuRung == null)
            {
                return NotFound();
            }

            return View(chuRung);
        }

        // POST: ChuRung/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var chuRung = await _context.ChuRung.FindAsync(id);
            _context.ChuRung.Remove(chuRung);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ChuRungExists(int id)
        {
            return _context.ChuRung.Any(e => e.Id == id);
        }
    }
}
