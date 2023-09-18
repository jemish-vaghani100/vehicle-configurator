using demo1.DAL;
using demo1.Models;
using Microsoft.AspNetCore.Mvc;

namespace demo1.Repositories
{
    public interface IAlternateComponent { 
    
        Task<ActionResult<IEnumerable<SubCompPrice>>> GetDefaultCompname(int modelId);
        Task<ActionResult<IEnumerable<string>>> GetCompnameByExt(int model_id);
        Task<ActionResult<IEnumerable<string>>> GetCompnameByStd(int model_id);
        Task<ActionResult<IEnumerable<string>>> GetCompnameByInt(int model_id);
        Task<ActionResult<IEnumerable<SubCompPrice>>> GetConfigurableConfig(int modelId, string compName);
    }
}
