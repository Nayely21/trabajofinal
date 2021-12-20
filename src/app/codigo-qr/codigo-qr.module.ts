import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodigoQrMainComponent } from './codigo-qr-main/codigo-qr-main.component';



@NgModule({
  declarations: [
    CodigoQrMainComponent
  ],
  exports:[
    CodigoQrMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CodigoQrModule { }
