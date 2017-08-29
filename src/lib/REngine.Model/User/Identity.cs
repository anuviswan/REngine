using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace REngine.Model.User
{
    public class Identity
    {
        dynamic ID { get; set; }
        string Username { get; set; }
        string Password { get; set; }
        string FirstName { get; set; }
        string LastName { get; set; }
        bool IsActive { get; set; }
    }
}
