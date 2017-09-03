using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using REngine.Data;
using REngine.Model.User;

namespace REngine.Core.Concrete
{
    public class User : Abstract.IUser
    {
        private Data.IUser _UserInstance;

        public User(Data.IUser UserInstance)
        {
            _UserInstance = UserInstance;
        }

        public bool Add(Model.User.Identity UserIdentity)
        {
            UserIdentity.IsActive = true;
            return _UserInstance.Add(UserIdentity);
        }

        public Identity Get(string Username)
        {
            return _UserInstance.GetUser(Username);
        }

        public IList<Identity> GetAll()
        {
            return _UserInstance.GetAll();
        }

        public Model.User.Identity Validate(Model.User.Identity User,out bool IsAuthenticated)
        {
            return _UserInstance.ValidateUser(User, out IsAuthenticated);
        }
    }
}
