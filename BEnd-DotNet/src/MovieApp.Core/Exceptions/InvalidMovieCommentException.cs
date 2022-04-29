using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Core.Exceptions
{
    public class InvalidMovieCommentException : Exception
    {
        
        public InvalidMovieCommentException(int min, int commentLenght) : 
            base($"!!Errore!! Il numero dei caratteri inserito per il commento: ({commentLenght}) DEVE essere superiore a: {min}")
        {

        }
    }

}
