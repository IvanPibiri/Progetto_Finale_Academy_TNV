


import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Comments } from 'src/app/models/comments.model';
import { CommentsInterface } from 'src/app/models/commentModel';




@Injectable({
  providedIn: 'root'
})
export class CommentsService {


  private baseURL = ' http://localhost:5293/movie'; //variabile con indirizzo principale chiamata per comemnti

  constructor(private http: HttpClient) { }

  
  getComments() {
    return this.http.get<CommentsInterface[]>(this.baseURL);
  }

  getComment(id:number) {
    return this.http.get<CommentsInterface>(this.baseURL + "/" + id);
  }

  getUserComments(id: number) {
    return this.http.get<CommentsInterface>(this.baseURL + "?user-id=" + id);
  }
  
  createComment(comment: CommentsInterface){
    return this.http.post<CommentsInterface>(` http://localhost:5293/movie`, comment);
  }
 
  deleteComment(id : number ) {
    return this.http.delete(this.baseURL + "/" + id);
  }
 
 
}