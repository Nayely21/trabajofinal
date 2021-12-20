import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginMainComponent } from './login-main/login-main.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    LoginMainComponent
  ],
  exports:[
    LoginMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class LoginModule { }
