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
    public class PefcProductController : Controller
    {
        private readonly chungchirungContext _context;

        public PefcProductController(chungchirungContext context)
        {
            _context = context;
        }

        // GET: PefcProduct
        public async Task<IActionResult> Index()
        {
            var model = await _context.PefcProduct.ToListAsync();
            var selection = CertificateExtension.GetDataSelection();
            foreach (var item in model)
            {
                item.Type = selection.product_categories.FirstOrDefault(m => m.value == item.Type)?.label;
                item.IndustrySector = selection.industry_sector.FirstOrDefault(m => m.value == item.IndustrySector)?.label;
            }
            return View(model);
        }

        // GET: PefcProduct/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pefcProduct = await _context.PefcProduct
                .FirstOrDefaultAsync(m => m.Id == id);
            if (pefcProduct == null)
            {
                return NotFound();
            }

            return View(pefcProduct);
        }

        // GET: PefcProduct/Create
        public IActionResult Create()
        {
            var selection = CertificateExtension.GetDataSelection();
            ViewData["Type"] = new SelectList(selection.product_categories, "value", "label");
            ViewData["IndustrySector"] = new SelectList(selection.industry_sector, "value", "label");
            return View();
        }

        // POST: PefcProduct/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,Type,IndustrySector")] PefcProduct pefcProduct)
        {
            if (ModelState.IsValid)
            {
                _context.Add(pefcProduct);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(pefcProduct);
        }

        // GET: PefcProduct/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
          
            var pefcProduct = await _context.PefcProduct.FindAsync(id);
           
            if (pefcProduct == null)
            {
                return NotFound();
            }
            var selection = CertificateExtension.GetDataSelection();
            ViewData["Type"] = new SelectList(selection.product_categories, "value", "label", pefcProduct.Type);
            ViewData["IndustrySector"] = new SelectList(selection.industry_sector, "value", "label", pefcProduct.IndustrySector);
            return View(pefcProduct);
        }

        // POST: PefcProduct/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name,Type,IndustrySector")] PefcProduct pefcProduct)
        {
            if (id != pefcProduct.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(pefcProduct);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PefcProductExists(pefcProduct.Id))
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
            return View(pefcProduct);
        }

        // GET: PefcProduct/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pefcProduct = await _context.PefcProduct
                .FirstOrDefaultAsync(m => m.Id == id);
            if (pefcProduct == null)
            {
                return NotFound();
            }

            return View(pefcProduct);
        }

        // POST: PefcProduct/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var pefcProduct = await _context.PefcProduct.FindAsync(id);
            _context.PefcProduct.Remove(pefcProduct);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool PefcProductExists(int id)
        {
            return _context.PefcProduct.Any(e => e.Id == id);
        }
    }
}
