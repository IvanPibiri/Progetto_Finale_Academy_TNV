using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.DB.Entities
{
    [Table("comments")]
    public class MovieEntity
    {
        [Column("id"), Key]
        public int Id { get; set; }

        [Column("user_id")]
        public int User_Id { get; set; }

        [Column("movie_id")]
        public int Movie_Id { get; set; }

        [Column("comment")]
        public string Comment { get; set; }
    }
}
