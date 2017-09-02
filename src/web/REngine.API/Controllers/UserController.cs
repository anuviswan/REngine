using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;

namespace REngine.API.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class UserController : BaseController
    {
        #region Private Variables
        private Core.Abstract.IUser _UserInstance;
        #endregion

        public UserController(Core.Abstract.IUser UserInstance)
        {
            _UserInstance = UserInstance;
        }

        public Models.ReturnValue<Models.UserIdentity> Get(string Username)
        {
            try
            {
                var result = _UserInstance.Get(Username);
                return base.SendSuccessMsg<Models.UserIdentity>(AutoMapper.Mapper.Map<Models.UserIdentity>(result),"User Details");
            }
            catch (Exception)
            {
                return base.SendSuccessMsg<Models.UserIdentity>(default(Models.UserIdentity), "User Details");
            }
        }

        public Models.ReturnValue<IList<Models.UserIdentity>> GetAll()
        {
            try
            {
                var result = _UserInstance.GetAll();
                return base.SendSuccessMsg<IList<Models.UserIdentity>>(AutoMapper.Mapper.Map<IList<Models.UserIdentity>>(result), "List of Users");
            }
            catch (Exception)
            {
                return base.SendSuccessMsg<IList<Models.UserIdentity>>(default(IList<Models.UserIdentity>), "List of Users");
            }
        }

        public Models.ReturnValue<bool> Add(REngine.API.Models.UserIdentity User)
        {
            try
            {
                var result = _UserInstance.Add(AutoMapper.Mapper.Map<Model.User.Identity>(User));
                return base.SendSuccessMsg<bool>(result, "User Logged In successfully");
            }
            catch (Exception)
            {
                return base.SendSuccessMsg<bool>(false, "User Logged In Failed");
            }

        }

        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("api/User/Validate")]
        public Models.ReturnValue<API.Models.UserIdentity> Validate(REngine.API.Models.UserIdentity User)
        {
            try
            {
                bool isValidated = false;
                var result = _UserInstance.Validate(AutoMapper.Mapper.Map<Model.User.Identity>(User),out isValidated);
                if(isValidated)
                {
                    // TODO: create identifier for using for further 
                    var returnValue = AutoMapper.Mapper.Map<API.Models.UserIdentity>(result);
                    return base.SendSuccessMsg<API.Models.UserIdentity>(returnValue, "User Authenticated");
                }
                else
                    return base.SendSuccessMsg<API.Models.UserIdentity>(AutoMapper.Mapper.Map<API.Models.UserIdentity>(default(API.Models.UserIdentity)), "User Not Authenticated");
            }
            catch (Exception e)
            {
                return base.SendSuccessMsg<API.Models.UserIdentity>(default(API.Models.UserIdentity),e.Message);
            }
        }
    }
}