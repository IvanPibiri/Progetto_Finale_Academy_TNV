import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieData } from 'src/app/models/model-node/dataModel';


@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

    private baseURL = 'https://api.themoviedb.org';
    apiKey : String = "3949444e64e7a9355250d3b1b5c59bf1";

    getRandomInt(min: number, max: number) : number{
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  };

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
      return this.http.get<MovieData>(`https://api.themoviedb.org/3/discover/movie?api_key=3949444e64e7a9355250d3b1b5c59bf1&language=it-it&sort_by=popularity.desc&page=3${this.getRandomInt(1,50)}`)
     
    }

    searchMovie(movie:string){
       return this.http.get<MovieData>(`https://api.themoviedb.org/3/search/movie?api_key=3949444e64e7a9355250d3b1b5c59bf1&language=it-it&query=${movie}`)
    }
  
    getMovieByVote(){
    return this.http.get<MovieData>(`https://api.themoviedb.org/3/discover/movie?api_key=3949444e64e7a9355250d3b1b5c59bf1&language=it-it&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`) 
    }

    




}