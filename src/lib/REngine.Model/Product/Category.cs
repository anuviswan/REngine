using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace REngine.Model.Product
{
    public class Category
    {
        string CategoryID { get; set; }
        string ParentCategoryID { get; set; }
        string Name { get; set; }
        string Description { get; set; }
    }
}
