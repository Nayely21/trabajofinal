import { Component, OnInit } from '@angular/core';
import { GestionProveedorservice } from './services/gestion-proveedor.service';
import {  Local } from '../../modelo/local.class';
import { Producto } from 'src/app/modelo/producto.class';


@Component({
  selector: 'app-gestion-proveedor-main',
  templateUrl: './gestion-proveedor-main.component.html',
  styleUrls: ['./gestion-proveedor-main.component.css']
})
export class GestionProveedorMainComponent implements OnInit {

  constructor(
    private gestionProveedorservice:GestionProveedorservice)
    {
        this.gestionProveedorservice.listarProveedor();
    }
    
  // eliminacion:number[]=[]

  // nombreLocal:String=""
  // ubicacionLocal:String=""
  // rucLocal:String=""
  // contrasenaLocal:String=""

  // locales:Local[]=locales

  ngOnInit(): void {
  }
    get lista(){
      return this.gestionProveedorservice.lista;
    }
    
    codLocal:number=0;
    nombreLocal:String="";
    ubicacionLocal:String="";
    rucLocal:String="";
    contrasena:String="";

    public NuevoLocal = new Local(0,this.nombreLocal,this.ubicacionLocal,this.rucLocal,this.contrasena)
    actualizarLocal = new Local(0,this.nombreLocal,this.ubicacionLocal,this.rucLocal,this.contrasena)

    crearLocal(){
      this.gestionProveedorservice.agregarProveedor(this.NuevoLocal).then(value=>{this.gestionProveedorservice.listarProveedor();});
      
    }

    eliminarLocal(id:any){
      this.gestionProveedorservice.eliminarlocall(id).then(value=>{this.gestionProveedorservice.listarProveedor();});
    }

    actualizarLocales(){
      this.NuevoLocal = new Local(this.codLocal, this.nombreLocal,this.ubicacionLocal,this.rucLocal,this.contrasena)
      this.gestionProveedorservice.updateLocal(this.actualizarLocal,this.actualizarLocal.codLocal).then(value=>{this.gestionProveedorservice.listarProveedor();});
    }
    actualizarvariable(locallctualizado: Local){
      this.actualizarLocal = locallctualizado;
      this.gestionProveedorservice.listarProveedor();
    }
    // agregar(){
    //     this.gestionProveedorservice.agregarproducto(this.nombreLocal,this.ubicacionLocal,this.rucLocal,this.contrasenaLocal)
    //   }
    //    eliminar(){
    //     this.gestionProveedorservice.eliminarproducto(this.eliminacion)
    //     this.eliminacion=[]
    // // // agregar(){
    // // //   this.gestionProveedorservice.agregarproducto(this.nombreLocal,this.ubicacionLocal,this.rucLocal,this.contrasenaLocal)
    // // // }
    // // // eliminar(){
    // // //   this.gestionProveedorservice.eliminarproducto(this.eliminacion)
    // // //   this.eliminacion=[]
  
    // // // }

}
