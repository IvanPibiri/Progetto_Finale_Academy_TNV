import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieData } from 'src/app/models/model-node/dataModel';


@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

    private baseURL = 'https://api.themoviedb.org';
    apiKey : String = "3949444e64e7a9355250d3b1b5c59bf1";

    constructor( private http : HttpClient) { }

    getMovieList(){
        return this.http.get<MovieData[]>(`https://api.themoviedb.org/3/list/3?api_key=3949444e64e7a9355250d3b1b5c59bf1`);
    } 

    getMovieById(movieId:number){
      return this.http.get<MovieData>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=3949444e64e7a9355250d3b1b5c59bf1&language=it-it`);
    }

    getMovies(poster_path: string | null){
        return `https://image.tmdb.org/t/p/w300/{{movies.poster_path}}`
    }

    //https://api.themoviedb.org/3/movie/550?api_key=3949444e64e7a9355250d3b1b5c59bf1

    getMoviePopulares(){
      return this.http.get<MovieData>(`https://api.themoviedb.org/3/discover/movie?api_key=3949444e64e7a9355250d3b1b5c59bf1&language=it-it&sort_by=popularity.desc&page=1`)
     
    }

    searchMovie(movie:string){
       return this.http.get<MovieData>(`https://api.themoviedb.org/3/search/movie?api_key=3949444e64e7a9355250d3b1b5c59bf1&language=it-it&query=${movie}`)
    }
  
    getMovieByVote(){
    return this.http.get<MovieData>(`https://api.themoviedb.org/3/discover/movie?api_key=3949444e64e7a9355250d3b1b5c59bf1&language=it-it&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`) 
    }

    




}