import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoginModule } from '../login/login.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    LoginModule
  ]
})
export class CommonVistaModule { }
