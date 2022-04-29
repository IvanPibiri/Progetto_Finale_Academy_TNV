using System.Text.Json.Serialization;

namespace MovieApp.RestAPI.Model.Request
{
    public class MovieCommentCreateParameters
    {

            [JsonPropertyName("movieId")]
            public int Movie_Id { get; set; }

            [JsonPropertyName("userId")]
            public int User_Id { get; set; }

            [JsonPropertyName("comment")]
            public string Comment { get; set; }


    }
    
}
