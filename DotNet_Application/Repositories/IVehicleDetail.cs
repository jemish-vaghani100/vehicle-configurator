using demo1.Models;
using Microsoft.AspNetCore.Mvc;

namespace demo1.Repositories
{
    public interface IVehicleDetail
    {
        Task<ActionResult<IEnumerable<String>>>getVehicleDetailsByCore(int model_id);
        Task<ActionResult<IEnumerable<String>>> getVehicleDetailsByStandard(int model_id);
        Task<ActionResult<IEnumerable<String>>> getVehicleDetailsByInterior(int model_id);
        Task<ActionResult<IEnumerable<String>>> getVehicleDetailsByExterior(int model_id);

        Task<ActionResult<double>> getVehicleDetailsByPrice(int model_id);

    }
}
