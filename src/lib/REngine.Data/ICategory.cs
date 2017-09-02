using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace REngine.Data
{
    public interface ICategory
    {
        void Create(Model.Product.Category NewCategory);
    }
}
