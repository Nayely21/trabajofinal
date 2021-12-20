import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbicacionMainComponent } from './ubicacion-main/ubicacion-main.component';



@NgModule({
  declarations: [
    UbicacionMainComponent
  ],
  exports:[
    UbicacionMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UbicacionModule { }
