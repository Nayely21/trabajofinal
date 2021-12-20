import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent implements OnInit {

  constructor(private LoginService:LoginService) {}
  ngOnInit(): void {
  }

  get loginserices(){
    return this.LoginService
  }

  
}




