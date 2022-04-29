using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Core.Exceptions
{
    public class MovieCommentDeleteNotFounfException : Exception
    {
        public MovieCommentDeleteNotFounfException(int commentId) : base($"!!ATTENZIONE!! Non è stato possibile eliminare Movie Comment con id: {commentId} ")
        {
        }
    }
}
