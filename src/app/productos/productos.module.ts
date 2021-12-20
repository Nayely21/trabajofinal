import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosMainComponent } from './productos-main/productos-main.component';
import { ProductoService } from './services/producto.service';



@NgModule({
  declarations: [
    ProductosMainComponent
  ],
  exports:[
    ProductosMainComponent
  ],
  imports: [
    CommonModule,
  ],
  providers:[
    ProductoService
  ]
})
export class ProductosModule { }
