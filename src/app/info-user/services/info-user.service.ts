import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../modelo/usuario.class';
import { Local } from 'src/app/modelo/local.class';

@Injectable({
  providedIn: 'root'
})
export class InfoUserService {

  constructor(private http:HttpClient) { 
    if(localStorage.getItem("usuarioactivo")!=''){
    this.http.get<Usuario>('http://127.0.0.1:8080/api/usuarios/'+localStorage.getItem("usuarioactivo")).toPromise().then((resp:Usuario)=>this.usuario1=resp)
    }
    else{
      this.http.get<Local>('http://127.0.0.1:8080/api/local/'+localStorage.getItem("localactivo")).toPromise().then((resp:Local)=>this.local1=resp)
    }
  }
  
  usuarioactivo=localStorage.getItem("usuarioactivo");
  localactivo=localStorage.getItem("localactivo")
  usuario1:Usuario=new Usuario(0,"","","","","","","","");
  local1:Local=new Local(0,"","","","")

}
