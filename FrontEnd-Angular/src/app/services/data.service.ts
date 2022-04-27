import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDataInterface } from '../models/model-node/apiMovie.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL = 'http://localhost:3000/data';

  constructor( private http : HttpClient) { }

  getData () {
    return this.http.get<Array<MovieDataInterface>>(this.baseURL)
  }

  getEntry( id: number ) {
    return this.http.get<MovieDataInterface>(this.baseURL + "/" + id)
  }

  addEntry = (data: MovieDataInterface) => {
    let apiId;
    if(data.apiId) apiId=data.apiId;
    else apiId=-1;
    return this.http.post<MovieDataInterface>(this.baseURL, {
      "name": data.name,
      "cast": data.cast,
      "director": data.director,
      "genre": data.genre,
      "rated": data.rated,
      "overview": data.overview,
      "evaluation": data.evaluation,
      "releaseDate": data.releaseDate,
      "addedBy": data.addedBy,
      "counter": 0,
      "apiId": apiId
    });
  };

  deleteEntry( id: number ){
    return this.http.delete(this.baseURL + "/" + id)
  }

  editEntry = (data: MovieDataInterface) => {
    return this.http.put(this.baseURL + '/' + data.id, {
      "id": data.id,
      "name": data.name,
      "cast": data.cast,
      "director": data.director,
      "genre": data.genre,
      "rated": data.rated,
      "overview": data.overview,
      "evaluation": data.evaluation,
      "releaseDate": data.releaseDate,
      "addedBy": data.addedBy,
      "counter": data.counter,
      "apiId": data.apiId
    });
  };

}