import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { movieRating } from 'src/app/models/rating-model/movieRating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private httpClient: HttpClient) { }

  getRating(movie_id : number | null){
    return this.httpClient.get<movieRating>(`http://localhost:8000/api/movie_id/${movie_id}`);
  }

  postRating(movieRating: movieRating | null){
    return this.httpClient.post<movieRating>(`http://localhost:8000/api/movie`, movieRating);
  }

  postMovieRating = (data: movieRating) => {
    console.log("Ho ricevuto", data);
    return this.httpClient.post<movieRating>(`http://localhost:8000/api/movie`, {
      "movie_id" : data.movie_id,
      "user_id" : data.user_id,
      "movie_rating" : data.movie_rating
    });
  }
  
  deleteMovieRating(movie_id : number | null){
    return this.httpClient.delete(`http://localhost:8000/api/movie_id/${movie_id}`);

  }

  editMovieRating(movie_id : number, data: movieRating){
    return this.httpClient.put(`http://localhost:8000/api/movie_id/${movie_id}`, {
      "movie_id" : data.movie_id,
      "user_id" : data.user_id,
      "movie_rating" : data.movie_rating
    });
  }


}
