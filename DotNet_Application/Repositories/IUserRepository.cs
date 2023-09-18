using demo1.Models;
using Microsoft.AspNetCore.Mvc;

namespace demo1.Repositories
{
    public interface IUserRepository
    {
        Task<ActionResult<User>> AddUser(User user);
        // public boolean validateUser(User user);
        Task<ActionResult<bool>?> validateUser(User user);
    }
}
