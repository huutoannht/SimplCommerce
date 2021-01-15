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
    public class LocalizationResourceController : Controller
    {
        private readonly chungchirungContext _context;

        public LocalizationResourceController(chungchirungContext context)
        {
            _context = context;
        }

        // GET: LocalizationResource
        [HttpGet("ngon-ngu")]
        public async Task<IActionResult> Index()
        {
            var chungchirungContext = _context.LocalizationResource.Include(l => l.Culture);
            return View(await chungchirungContext.ToListAsync());
        }

        // GET: LocalizationResource/Details/5
        public async Task<IActionResult> Details(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var localizationResource = await _context.LocalizationResource
                .Include(l => l.Culture)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (localizationResource == null)
            {
                return NotFound();
            }

            return View(localizationResource);
        }

        // GET: LocalizationResource/Create
        public IActionResult Create()
        {
            ViewData["CultureId"] = new SelectList(_context.LocalizationCulture, "Id", "Id");
            return View();
        }

        // POST: LocalizationResource/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Key,Value,CultureId")] LocalizationResource localizationResource)
        {
            var isValidKey =await _context.LocalizationResource.AnyAsync(m => m.Key == localizationResource.Key);
            ModelState.AddModelError("Key", "Giá trị này đã tồn tại.");
            if (ModelState.IsValid)
            {
                _context.Add(localizationResource);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["CultureId"] = new SelectList(_context.LocalizationCulture, "Id", "Id", localizationResource.CultureId);
            return View(localizationResource);
        }

        // GET: LocalizationResource/Edit/5
        public async Task<IActionResult> Edit(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var localizationResource = await _context.LocalizationResource.FindAsync(id);
            if (localizationResource == null)
            {
                return NotFound();
            }
            ViewData["CultureId"] = new SelectList(_context.LocalizationCulture, "Id", "Id", localizationResource.CultureId);
            return View(localizationResource);
        }

        // POST: LocalizationResource/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(long id, [Bind("Id,Key,Value,CultureId")] LocalizationResource localizationResource)
        {
            if (id != localizationResource.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(localizationResource);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!LocalizationResourceExists(localizationResource.Id))
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
            ViewData["CultureId"] = new SelectList(_context.LocalizationCulture, "Id", "Id", localizationResource.CultureId);
            return View(localizationResource);
        }

        // GET: LocalizationResource/Delete/5
        public async Task<IActionResult> Delete(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var localizationResource = await _context.LocalizationResource
                .Include(l => l.Culture)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (localizationResource == null)
            {
                return NotFound();
            }

            return View(localizationResource);
        }

        // POST: LocalizationResource/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(long id)
        {
            var localizationResource = await _context.LocalizationResource.FindAsync(id);
            _context.LocalizationResource.Remove(localizationResource);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool LocalizationResourceExists(long id)
        {
            return _context.LocalizationResource.Any(e => e.Id == id);
        }
    }
}
