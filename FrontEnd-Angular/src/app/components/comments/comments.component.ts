import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentsService } from 'src/app/services/comments/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private httpClient: HttpClient, private serviceBE: CommentsService ) { }

  ngOnInit(): void {
  }

  createComment(comment: NgForm) {
    this.serviceBE.createComment(comment.value).subscribe({
      next: () => console.log('comment created'),
      error: () => console.log('error')
    });
  }



}
