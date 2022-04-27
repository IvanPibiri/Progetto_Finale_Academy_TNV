


import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Comments } from 'src/app/models/comments.model';




@Injectable({
  providedIn: 'root'
})
export class CommentsService {


  private baseURL = 'http://localhost:5293/comments'; //variabile con indirizzo principale chiamata per comemnti

  constructor(private http: HttpClient) { }

  
  getComments() {
    return this.http.get<Comments[]>(this.baseURL);
  }

  getComment(id:number) {
    return this.http.get<Comments>(this.baseURL + "/" + id);
  }

  getUserComments(id: number) {
    return this.http.get<Comments>(this.baseURL + "?user-id=" + id);
  }
  
  createComment(comment: Comments){
    return this.http.post<Comments>(`http://localhost:5161/comments/`, comment);
  }
 
  deleteComment(id : number ) {
    return this.http.delete(this.baseURL + "/" + id);
  }
 
  editComment = (data: Comments) => {
    return this.http.put(this.baseURL + '/' + data.id, {
      "id": data.id,
      "userId": data.userId,
      "movieId": data.movieId,
      "comments": data.comment
    });
  };
}