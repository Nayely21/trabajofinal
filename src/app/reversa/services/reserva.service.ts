import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DetalleReserva } from "src/app/modelo/detallereserva.class";
import { Router } from '@angular/router';


@Injectable({
  providedIn:'root'
})
export class ReservaService{
  constructor(private http:HttpClient,private route:Router){
    this.http.get<number>('http://localhost:8080/api/reservacarrito/'+localStorage.getItem("usuarioactivo")).toPromise().then((resp:number)=>{localStorage.setItem("carrito",resp.toString()); this.http.get<DetalleReserva[]>('http://localhost:8080/api/detallereservaporReserva/'+resp).toPromise().then((resp:DetalleReserva[])=>this.detallesreserva=resp)});
  }
detallesreserva:DetalleReserva[]=[]
  
   get detallesreservas():DetalleReserva[]{
    
    return this.detallesreserva
    
          
  }
   total(detallereserva:DetalleReserva[]):number{
   let cant:number=0
    detallereserva.forEach(element => {
   cant = cant+(element.tieneProductoLocal.precioProductoLocal*element.cantidadDetalleReserva) 
   }); 
   return cant
  }
  reservar(){
    this.http.get<number>('http://localhost:8080/api/reservar/'+localStorage.getItem("usuarioactivo")).toPromise().then((resp:number)=>{localStorage.setItem("carrito",resp.toString())});
    this.route.navigate(['entrega-pedidos'])
  }
  
    
}