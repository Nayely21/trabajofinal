import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaMainComponent } from './categoria-main/categoria-main.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CategoriaMainComponent
  ],
  exports:[
    CategoriaMainComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class CategoriaModule { }
