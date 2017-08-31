using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using REngine.Model.User;

namespace REngine.Core.Abstract
{
    public interface IUser
    {
        Model.User.Identity Validate(Model.User.Identity User,out bool IsAuthenticated);
        bool Add(Identity identity);
        Model.User.Identity Get(string Username);
        IList<Model.User.Identity> GetAll();
    }
}
