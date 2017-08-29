using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using REngine.Model.User;

namespace REngine.MongoDb.Concrete
{
    public class User : Data.IUser
    {
        public Identity GetUser(string Username)
        {
            throw new NotImplementedException();
        }

        public bool ValidateUser(Identity User, out Identity Result)
        {
            throw new NotImplementedException();
        }
    }
}
