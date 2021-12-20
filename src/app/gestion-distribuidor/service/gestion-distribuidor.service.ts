import { Injectable } from '@angular/core';
import { ProductoLocal } from '../../modelo/productolocal.class';
import { Producto } from '../../modelo/producto.class';
import {HttpClient} from "@angular/common/http"
import { Local } from '../../modelo/local.class';


@Injectable({
  providedIn: 'root'
})
export class GestionDistribuidorService {

  constructor(private http:HttpClient) {
    this.http.get<Producto[]>('http://127.0.0.1:8080/api/productosinlocal/'+localStorage.getItem("localactivo")).subscribe((resp:Producto[])=>{console.log(resp);this.productos=resp;});
   }
  
  public productos:Producto[] = []
  


  async agregar(producto:Producto,precio:number){
    await this.http.put<any>('http://127.0.0.1:8080/api/productolocalcrear/'+precio+"/"+localStorage.getItem("localactivo")+"/"+producto.codProducto,"").toPromise();
    this.http.get<Producto[]>('http://127.0.0.1:8080/api/productosinlocal/'+localStorage.getItem("localactivo")).subscribe((resp:Producto[])=>{console.log(resp);this.productos=resp;});
  }
  
}
