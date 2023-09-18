using demo1.Models;
using Microsoft.AspNetCore.Mvc;

namespace demo1.Repositories
{
    public interface IVariantRepository
    {
        Task<ActionResult<IEnumerable<Variant>>> getvariant(int mfg_id, int seg_id);
    }
}
