using demo1.Models;
using demo1.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace demo1.Controller
{
   
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        
        [Route("api/signup")]
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _userRepository.AddUser(user);
            return CreatedAtAction("PostUser", new User { id = user.id }, user);
        }


        [Route("api/login")]
        [HttpPost]
        public async Task<ActionResult<bool>> ValidateUser(User user)
        {
            return await _userRepository.validateUser(user);
        }
    }
}
