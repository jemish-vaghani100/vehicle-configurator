using demo1.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vehicle.Models;
using System.Collections.Generic;

namespace demo1.Repositories
{
    public class SqlVehicleDetailRepository : IVehicleDetail
    {
        private readonly ApplicationDbContext context;
        public SqlVehicleDetailRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task<ActionResult<IEnumerable<string>>> getVehicleDetailsByCore(int model_id)
        {
            var values = await context.Vehicle_Details
              .Where(m => m.model_id == model_id && m.comp_type == "c")
                .Join(
            context.Components,
            vd => vd.comp_id,
            c => c.comp_id,
            (vd, c) => c.sub_type
        )
              .ToListAsync();

            return values;
        }

        public async Task<ActionResult<IEnumerable<string>>> getVehicleDetailsByExterior(int model_id)
        {
            var values = await context.Vehicle_Details
  .Where(m => m.model_id == model_id && m.comp_type == "e")
  .Join(
            context.Components,
            vd => vd.comp_id,
            c => c.comp_id,
            (vd, c) => c.sub_type
        )
  .ToListAsync();

            return values;
        }

        public async Task<ActionResult<IEnumerable<string>>> getVehicleDetailsByInterior(int model_id)
        {
            var values = await context.Vehicle_Details
  .Where(m => m.model_id == model_id && m.comp_type == "i")
  .Join(
            context.Components,
            vd => vd.comp_id,
            c => c.comp_id,
            (vd, c) => c.sub_type
        )
  .ToListAsync();

            return values;
        }

        public async Task<ActionResult<IEnumerable<string>>> getVehicleDetailsByStandard(int model_id)
        {
            var values = await context.Vehicle_Details
 .Where(m => m.model_id == model_id && m.comp_type == "s")
 .Join(
            context.Components,
            vd => vd.comp_id,
            c => c.comp_id,
            (vd, c) => c.sub_type
        )
 .ToListAsync();

            return values;
        }

        public async Task<ActionResult<double>> getVehicleDetailsByPrice(int model_id)
        {
            var values = await context.Vehicle_Details
 .Where(m => m.model_id == model_id)
 .FirstOrDefaultAsync();

            return values.price;
        }

    }
}
