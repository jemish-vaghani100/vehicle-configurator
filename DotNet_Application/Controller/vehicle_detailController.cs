using demo1.Models;
using demo1.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace demo1.Controller
{
    [Route("")]
    [ApiController]
    public class vehicle_detailController : ControllerBase
    {
        private readonly IVehicleDetail _repo;

        public vehicle_detailController(IVehicleDetail Repository)
        {
            _repo = Repository;
        }

        [HttpGet("api/componentbyc/{model_id}")]
        public async Task<ActionResult<IEnumerable<String>?>> getVehicleDetailsByCore(int model_id)
        {
            var corecomp = await _repo.getVehicleDetailsByCore(model_id);

            if (corecomp == null)
            {
                return NoContent();
            }

            return corecomp;
        }


        [HttpGet("api/componentbys/{model_id}")]
        public async Task<ActionResult<IEnumerable<string>>> getVehicleDetailsByStandard(int model_id)
        {
            var stdcomp = await _repo.getVehicleDetailsByStandard(model_id);

            if (stdcomp == null)
            {
                return NoContent();
            }

            return stdcomp;
        }


        [HttpGet("api/componentbyi/{model_id}")]
        public async Task<ActionResult<IEnumerable<string>>> getVehicleDetailsByInterior(int model_id)
        {
            var interiorcomp = await _repo.getVehicleDetailsByInterior(model_id);

            if (interiorcomp == null)
            {
                return NoContent();
            }

            return interiorcomp;
        }


        [HttpGet("api/componentbye/{model_id}")]
        public async Task<ActionResult<IEnumerable<string>>> getVehicleDetailsByExterior(int model_id)
        {
            var extcomp = await _repo.getVehicleDetailsByExterior(model_id);

            if (extcomp == null)
            {
                return NoContent();
            }

            return extcomp;
        }



        [HttpGet("api/price/{model_id}")]
        public async Task<ActionResult<double>> getVehicleDetailsByPrice(int model_id)
        {
            var price = await _repo.getVehicleDetailsByPrice(model_id);

            if (price == null)
            {
                return NoContent();
            }

            return price;
        }

    }
}
