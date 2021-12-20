import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoDistribuidorMainComponent } from './producto-distribuidor-main/producto-distribuidor-main.component';
import { FormsModule } from '@angular/forms';
import { ProductoDistrubuidorPrecioComponent } from './producto-distrubuidor-precio/producto-distrubuidor-precio.component';



@NgModule({
  declarations: [
    ProductoDistribuidorMainComponent,
    ProductoDistrubuidorPrecioComponent
  ],
  exports:[
    ProductoDistribuidorMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
  
})
export class GestionDistribuidorModule { }
