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
    public class PefcCompanyController : Controller
    {
        private readonly chungchirungContext _context;

        public PefcCompanyController(chungchirungContext context)
        {
            _context = context;
        }

        // GET: PefcCompany
        public async Task<IActionResult> Index()
        {
            return View(await _context.PefcCompany.ToListAsync());
        }

        // GET: PefcCompany/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pefcCompany = await _context.PefcCompany
                .FirstOrDefaultAsync(m => m.Id == id);
            if (pefcCompany == null)
            {
                return NotFound();
            }

            return View(pefcCompany);
        }

        // GET: PefcCompany/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: PefcCompany/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,Phone,Fax,Email,Website,Address")] PefcCompany pefcCompany)
        {
            if (ModelState.IsValid)
            {
                _context.Add(pefcCompany);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(pefcCompany);
        }

        // GET: PefcCompany/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pefcCompany = await _context.PefcCompany.FindAsync(id);
            if (pefcCompany == null)
            {
                return NotFound();
            }
            return View(pefcCompany);
        }

        // POST: PefcCompany/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name,Phone,Fax,Email,Website,Address")] PefcCompany pefcCompany)
        {
            if (id != pefcCompany.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(pefcCompany);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PefcCompanyExists(pefcCompany.Id))
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
            return View(pefcCompany);
        }

        // GET: PefcCompany/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pefcCompany = await _context.PefcCompany
                .FirstOrDefaultAsync(m => m.Id == id);
            if (pefcCompany == null)
            {
                return NotFound();
            }

            return View(pefcCompany);
        }

        // POST: PefcCompany/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var pefcCompany = await _context.PefcCompany.FindAsync(id);
            _context.PefcCompany.Remove(pefcCompany);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool PefcCompanyExists(int id)
        {
            return _context.PefcCompany.Any(e => e.Id == id);
        }
    }
}
