using demo1.Models;
using Microsoft.AspNetCore.Mvc;

namespace demo1.Repositories
{
    public interface IManufacturerRepository
    {
        Task<ActionResult<IEnumerable<Manufacturer>>> GetAllManufacturerbyid(int seg);
    }
}
