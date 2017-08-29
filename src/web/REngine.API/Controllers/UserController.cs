using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace REngine.API.Controllers
{
    public class UserController : BaseController
    {
        #region Private Variables
        private Core.Abstract.IUser _UserInstance;
        #endregion

        public UserController(Core.Abstract.IUser UserInstance)
        {
            _UserInstance = UserInstance;
        }
        public Models.ReturnValue<bool> Validate()
        {
            return base.SendSuccessMsg<bool>(true, "done");
        }
    }
}