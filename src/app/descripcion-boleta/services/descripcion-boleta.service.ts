import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleReserva } from 'src/app/modelo/detallereserva.class';
import { reservaactiva } from '../../entrega-pedidos/servicios.service';
@Injectable({
  providedIn: 'root'
})
export class descripcionboletaService{

  constructor(private http:HttpClient, private rutaActiva: ActivatedRoute) {
    
  }

  detallereserva: DetalleReserva[]=[];
  get detallereservalista(){
    return this.detallereserva;
  }

   total(detallereserva:DetalleReserva[]):number{
     let cant:number=0
     detallereserva.forEach(element => {
     cant = cant+(element.tieneProductoLocal.precioProductoLocal*element.cantidadDetalleReserva)
     });
     console.log(this.detallereserva)
     console.log(reservaactiva[0])
     return cant
}
}