using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace REngine.Core.Abstract
{
    public interface IUser
    {
        bool Validate(out Model.User.Identity User);
    }
}
