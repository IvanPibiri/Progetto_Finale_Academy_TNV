import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentsInterface } from 'src/app/models/commentModel';
import { Comments } from 'src/app/models/comments.model';
import { CommentsService } from 'src/app/services/comments/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() movieId!: number;
  @Input() userId!: number;

  constructor(private httpClient: HttpClient,private serviceBE: CommentsService) { }

  ngOnInit(): void {
  }

  createComment(comment: NgForm) {
    this.serviceBE.createComment(comment.value).subscribe({
      next: () => console.log('comment created'),
      error: () => console.log('error')
    });
  }







}
