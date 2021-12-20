import { Injectable } from '@angular/core';
import { Usuario} from 'src/app/modelo/usuario.class';
import { Router } from '@angular/router';
import { Local } from '../../../modelo/local.class';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from '../../../common-vista/header/header.component';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private route:Router,private http:HttpClient) { }
  Usuario:string=''
  Contrasena:string=''
  usuarios:Usuario[]=[]
  

  async Validacion(usuario:string,contrasena:string):Promise<Boolean>{
    await localStorage.setItem("usuarioactivo","")
    await localStorage.setItem("localactivo","")
    await localStorage.setItem("adminactivo","")
    await this.validarusuario(usuario,contrasena)


    if (await this.validarusuario(usuario,contrasena) ){
      return true
    }
    if (await this.validarlocal(usuario,contrasena)) {
      return true
    }
    if(await usuario=='admin' && contrasena=='123') {
      localStorage.setItem("adminactivo","1")
      return true
    }
    else{
      return false
    }

}
  async validarusuario(usuario:string,contrasena:string):Promise<Boolean>{
    let usuarioact:Number=0
    await this.http.get<number>('http://127.0.0.1:8080/api/usuariologin'+"/"+usuario+"/"+contrasena).toPromise().then(((resp:number)=>{if (resp!=null){usuarioact=resp ;localStorage.setItem("usuarioactivo",resp.toString());};}));
    if (usuarioact==0){
      return false
    }
    else{
      this.http.get<number>('http://localhost:8080/api/reservacarrito/'+localStorage.getItem("usuarioactivo")).toPromise().then((resp:Number)=>localStorage.setItem("carrito",usuarioact.toString())); 
    return true}
    }
    async validarlocal(usuario:string,contrasena:string):Promise<Boolean>{
      let localact:number=0
      await this.http.get<number>('http://127.0.0.1:8080/api/locallogin'+"/"+usuario+"/"+contrasena).toPromise().then((resp:number)=>{if (resp!=null){localact=resp;localStorage.setItem("localactivo",resp.toString());};});
      if (localact==0){
        return false
      }
      else{
      return true}
      }

  async ingresar(){
    if(await this.Validacion(this.Usuario,this.Contrasena)){
      this.route.navigate(['categorias'])
    }
    else{
      alert('Invalido el usuario y contraseña')
    }
  }
}


