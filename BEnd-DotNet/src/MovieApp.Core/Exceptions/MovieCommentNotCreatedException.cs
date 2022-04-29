using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Core.Exceptions
{
    public class MovieCommentNotCreatedException : Exception
    {
        public MovieCommentNotCreatedException() : base("!!ATTENZIONE!!! La creazione del Movie Comment NON è andata a buon fine, riprovare!!!")
        {

        }
    }
}
