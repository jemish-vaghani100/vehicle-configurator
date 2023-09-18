using demo1.Models;
using demo1.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace demo1.Controller
{
    [ApiController]
    public class Alternate_ComponentController : ControllerBase
    {
        private readonly IAlternateComponent _repo;

        public Alternate_ComponentController(IAlternateComponent repository)
        {
            _repo = repository;
        }
        

    }
}
