using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SimplCommerce.Infrastructure.Data;
using SimplCommerce.Infrastructure.Web.SmartTable;
using SimplCommerce.Module.Core.Areas.Core.ViewModels;
using SimplCommerce.Module.Core.Models;

namespace SimplCommerce.Module.Core.Areas.Core.Controllers
{
    [Area("Core")]
    [Route("api/booking-room")]
    public class BookingRoomApiController : Controller
    {
        private readonly IRepository<BookingType> _bookingTypeRepository;


        public BookingRoomApiController(IRepository<BookingType> bookingTypeRepository)
        {
            _bookingTypeRepository = bookingTypeRepository;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery]bool? shippingEnabled)
        {
            var query = _bookingTypeRepository.Query();
            var countries = await query
                .OrderBy(x => x.Name)
                .Select(x => new
                {
                    Id = x.Id,
                    Name = x.Name
                }).ToListAsync();
            return Json(countries);
        }

        [HttpPost("grid")]
        public IActionResult List([FromBody] SmartTableParam param)
        {
            var query = _bookingTypeRepository.Query();

            if (param.Search.PredicateObject != null)
            {
                dynamic search = param.Search.PredicateObject;

                if (search.Name != null)
                {
                    string name = search.Name;
                    query = query.Where(x => x.Name.Contains(name));
                }
            }

            var countries = query.ToSmartTableResult(
                param,
                c => new
                {
                    c.Id,
                    c.Name,
                });

            return Json(countries);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(long id)
        {
            var bookingType = await _bookingTypeRepository.Query().FirstOrDefaultAsync(x => x.Id == id);
            if (bookingType == null)
            {
                return NotFound();
            }

            var model = new BookingTypeForm
            {
                Id = bookingType.Id,
                Name = bookingType.Name,
            };

            return Json(model);
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> Put(long id, [FromBody] BookingTypeForm model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var bookingType = await _bookingTypeRepository.Query().FirstOrDefaultAsync(x => x.Id == id);
            if (bookingType == null)
            {
                return NotFound();
            }

            bookingType.Name = model.Name;

            await _bookingTypeRepository.SaveChangesAsync();

            return Accepted();
        }

        [HttpPost]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> Post([FromBody] BookingTypeForm model)
        {
            if (ModelState.IsValid)
            {
                var bookingType = new BookingType(model.Id)
                {
                    Name = model.Name,
            };

                _bookingTypeRepository.Add(bookingType);
                await _bookingTypeRepository.SaveChangesAsync();

                return CreatedAtAction(nameof(Get), new { id = bookingType.Id }, null);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> Delete(long id)
        {
            var bookingType = await _bookingTypeRepository.Query().FirstOrDefaultAsync(x => x.Id == id);
            if (bookingType == null)
            {
                return NotFound();
            }

            try
            {
                _bookingTypeRepository.Remove(bookingType);
                await _bookingTypeRepository.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                return BadRequest(new { Error = $"The Booking Type {bookingType.Name} can't not be deleted because it is referenced by other tables" });
            }

            return NoContent();
        }
    }
}
