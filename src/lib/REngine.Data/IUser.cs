using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace REngine.Data
{
    public interface IUser
    {
        REngine.Model.User.Identity ValidateUser(REngine.Model.User.Identity User,out bool IsAuthenticated);
        REngine.Model.User.Identity GetUser(string Username);
        bool Add(Model.User.Identity UserIdentity);
        IList<Model.User.Identity> GetAll();
    }
}
