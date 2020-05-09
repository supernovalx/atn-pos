import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
  credentials: TokenPayload = {
    userName: '',
    password: '',
    role:''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}
  ngOnInit(): void {
    if(this.auth.isLoggedIn())
      this.router.navigateByUrl('/');
  }

  
  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/');
      console.log("authen done");
    }, (err) => {
      console.error(err);
    }); 
  }
}
