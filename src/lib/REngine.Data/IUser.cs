using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace REngine.Data
{
    public interface IUser
    {
        bool ValidateUser(REngine.Model.User.Identity User, out REngine.Model.User.Identity Result);
        REngine.Model.User.Identity GetUser(string Username);
    }
}
