using demo1.Models;
using demo1.Repositories;
using Microsoft.AspNetCore.Mvc;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace demo1.Controllers
{
    
    [ApiController]
    public class SegmentController : ControllerBase
    {
        private readonly ISegmentRepository _repo;

        public SegmentController(ISegmentRepository repository)
        {
            _repo = repository;
        }

        // GET: api/<SegmentController>
        [Route("api/segments")]
        [HttpGet]

        public async Task<ActionResult<IEnumerable<Segment>?>> GetSegment()

        {
            if (await _repo.GetAllSegment() == null)
            {
                return NotFound();
            }

            return await _repo.GetAllSegment();

        }

        [HttpGet("api/segments/getqty/{seg_id}")]
        public async Task<ActionResult<int>> GetQty(int seg_id)
        {
            int quantity = await _repo.GetQty(seg_id);
            if (quantity >= 0)
            {
                return Ok(quantity);
            }
            else
            {
                return NotFound(); // Or return an appropriate HTTP status code for not found
            }
        }



    }
}
