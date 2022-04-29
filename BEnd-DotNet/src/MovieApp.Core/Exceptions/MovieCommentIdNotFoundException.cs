using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Core.Exceptions
{
    public class MovieCommentIdNotFoundException : Exception
    {
        public MovieCommentIdNotFoundException(int commentId) : base($"!!ERRORE!! Non è stato trovato nessun commento con id: {commentId} ")
        {
        }


    }
}
