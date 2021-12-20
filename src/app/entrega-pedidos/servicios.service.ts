import { Injectable } from '@angular/core';
import { Reserva} from '../modelo/reserva.class';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {


  constructor(private route:Router,
  private http:HttpClient) { 
    if(localStorage.getItem("usuarioactivo")!=''){
      this.http.get<Reserva[]>("http://localhost:8080/api/reservausuarioactivas"+"/"+localStorage.getItem("usuarioactivo")).subscribe(resp=>this.reservass=resp);
    }else{
      this.http.get<Reserva[]>("http://localhost:8080/api/reservalocalactivas"+"/"+localStorage.getItem("localactivo")).subscribe(resp=>this.reservass=resp);
      
    }
  }
  reservass:Reserva[]=[]
  usuarioactivo=localStorage.getItem("usuarioactivo")
  localactivo=localStorage.getItem("localactivo")
  get getlistareservas(){
    return this.reservass;
    
  }

  eliminar(codReserva:number){
    const promesa= this.http.delete<any>('http://127.0.0.1:8080/api/reserva' + '/' + codReserva).toPromise().then(any=>this.getlistareservas);
    return promesa.then(value =>{return true});
    }
  
  // }
  
   

   vista(codReserva:number){
     console.log("hola")
    localStorage.setItem("reservaactiva",codReserva.toString())
    this.route.navigate(['descripcion-boleta/' + codReserva])

 }
}
 export const reservaactiva:Reserva[]=[]
