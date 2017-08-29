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
        private IUser _UserInstance;

        public User(Data.IUser UserInstance)
        {
            _UserInstance = UserInstance;
        }
        public bool Validate(out Identity User)
        {
            throw new NotImplementedException();
        }
    }
}
