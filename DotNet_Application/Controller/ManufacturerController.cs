using Microsoft.AspNetCore.Mvc;
using demo1.Models;
using demo1.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace demo1.Controllers
{
    [Route("")]
    [ApiController]
    public class ManufacturerController : ControllerBase
    {
        private readonly IManufacturerRepository _repo;

        public ManufacturerController(IManufacturerRepository repository)
        {
            _repo = repository;
        }
 

        [HttpGet("api/mfgbyid/{seg_id}")]
        public async Task<ActionResult<IEnumerable<Manufacturer>?>> GetManufacturersbyid(int seg_id)
        {
            var manufacturers = await _repo.GetAllManufacturerbyid(seg_id);

            if (manufacturers == null)
            {
                return NoContent();
            }

            return manufacturers;
        }






    }
}
