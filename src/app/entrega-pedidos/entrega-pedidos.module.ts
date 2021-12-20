import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntregaPedidosMainComponent } from './entrega-pedidos-main/entrega-pedidos-main.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EntregaPedidosMainComponent
  ],
  exports:[
    EntregaPedidosMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
  
})
export class EntregaPedidosModule { }
