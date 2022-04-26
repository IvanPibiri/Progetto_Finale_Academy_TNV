import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDataInterface } from 'src/app/models/login-model/login-info';
import { LoginService } from 'src/app/services/login/login.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
 // isUserLoggedIn: Partial<UserDataInterface> = {};

  constructor( private httpClient: HttpClient,  private loginService : LoginService ) {}
 

  ngOnInit(): void {
  
  }

  
 
  login(user: NgForm) {
    this.loginService.postLogin( user.value).subscribe({
      next: (res) => {this.loginService.isUserLoggedIn = true;
        this.loginService.userOn = res;
      },
      error: () => console.log('error')
    });

  }
  
}


