using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace REngine.API.Controllers
{
    public class BaseController : ApiController
    {        
        protected Models.ReturnValue<T> SendSuccessMsg<T>(T Data,string Message)
        {
            return new Models.ReturnValue<T>{success = true,data = Data,msg = Message};
        }
    }
}