using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Core.Exceptions
{
    public class MovieCommentNotUpdateException : Exception
    {
        public MovieCommentNotUpdateException() : base("!!ATTENZIONE!!! L'update del Movie Comment NON è andato a buon fine!!! Riprovare!!")
        {

        }

    }
}
