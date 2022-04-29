using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Core.Exceptions
{
    public class InvalidValueException : Exception
    {
        public InvalidValueException(string campo, int valueId) : base($"!!ERRORE!! Il valore {valueId} inserito in questo campo {campo}, deve essere MAGGIORE di 0!!!!!")
        {

        }
    }
}
