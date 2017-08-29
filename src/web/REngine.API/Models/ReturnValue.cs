using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace REngine.API.Models
{
    public class ReturnValue<T>
    {
        public bool success { get; set; }
        public string msg { get; set; }
        public T data { get; set; }
    }
}