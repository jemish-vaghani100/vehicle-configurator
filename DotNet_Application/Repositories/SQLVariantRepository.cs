using demo1.Models;
using demo1.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using demo1.Models;
using Vehicle.Models;

namespace Vehical_config_1.Repository
{
    public class SQLVariantRepository : IVariantRepository
    {

        private readonly ApplicationDbContext context;

        public SQLVariantRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public async Task<ActionResult<IEnumerable<Variant>>> getvariant(int seg_id, int mfg_id)
        {
            return await context.Variants
                .Where(m => m.Mfg_id == mfg_id && m.Seg_id == seg_id)
                .ToListAsync();
        }
    }
}
