using demo1.Models;
using demo1.Repositories;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace demo1.Controllers
{
    [Route("")]
    [ApiController]
    public class VariantController : ControllerBase
    {
        private readonly IVariantRepository _repo;

        public VariantController(IVariantRepository _repository)
        {
            _repo = _repository;
        }

        // GET api/<VariantController>/5]

        [HttpGet("api/variants/{seg_id}/{mfg_id}")]
        public async Task<ActionResult<IEnumerable<Variant>?>> getvariant(int seg_id,int mfg_id)
        {
            var variants = await _repo.getvariant(seg_id,mfg_id);

            if (variants == null)
            {
                return NoContent();
            }

            return variants;
        }


    }
}
