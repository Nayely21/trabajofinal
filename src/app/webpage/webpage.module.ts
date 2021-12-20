import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [
    InicioComponent
  ],
  exports:[
    InicioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WebpageModule { }
