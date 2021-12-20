import { Injectable } from '@angular/core';
import { Usuario} from '../../modelo/usuario.class';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResgistroUsuarioService {
  private baseUrl = "http://127.0.0.1:8080/api/usuario"

  constructor( private http: HttpClient) { }
  // codUsuario:number=0
  // dniUsuario:String=''
  // NombreUsuario:String=''
  // ApeliidoUsuario:String=''
  // Usuario:String=''
  // Contrasena:string=''
  // Contrasenaa:String=''
  // Celular:String=''
  // Correo:string=''
  // Direccion:String=''
  // usuarios:Usuario[] = usuarios



  agregarUsuario(usuario: Usuario){
    this.http.post<any>(this.baseUrl, usuario).subscribe();
  }

  
  // registrar():void{
  //   if(this.Contrasena==this.Contrasenaa){
  //     const nuevoUsuario:Usuario=new Usuario(this.codUsuario,this.dniUsuario,
  //       this.NombreUsuario,this.ApeliidoUsuario,this.Usuario,
  //       this.Contrasena,this.Celular,this.Correo,this.Direccion)
  //       usuarios.push(nuevoUsuario)
  //       console.log(nuevoUsuario)
  //   }
  //   else{
  //     alert('La contraseña no es igual')
  //   }
  // }
}
