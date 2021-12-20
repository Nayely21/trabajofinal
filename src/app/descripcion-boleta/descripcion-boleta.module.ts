import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescripcionBoletaMainComponent } from './descripcion-boleta-main/descripcion-boleta-main.component';
import { descripcionboletaService } from './services/descripcion-boleta.service';



@NgModule({
  declarations: [
    DescripcionBoletaMainComponent
  ],
  exports:[
    DescripcionBoletaMainComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    descripcionboletaService
  ]
})
export class DescripcionBoletaModule { }
