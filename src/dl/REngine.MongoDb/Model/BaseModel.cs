using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace REngine.MongoDb.Model
{
    public class BaseModel
    {
        public ObjectId Id { get; set; }
        public string IdStr
        {
            get { return Id.ToString(); }
            set
            {
                if (value != null)
                    this.Id = ObjectId.Parse(value);
            }
        }
    }
}
