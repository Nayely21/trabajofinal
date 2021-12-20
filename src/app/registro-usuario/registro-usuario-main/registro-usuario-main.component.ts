import { Component, OnInit } from '@angular/core';
import { Usuario} from '../../modelo/usuario.class';
import { ResgistroUsuarioService } from '../service/resgistro-usuario.service';

@Component({
  selector: 'app-registro-usuario-main',
  templateUrl: './registro-usuario-main.component.html',
  styleUrls: ['./registro-usuario-main.component.css']
})
export class RegistroUsuarioMainComponent implements OnInit {

  constructor(private resgistroUsuarioService:ResgistroUsuarioService) {
   }

  ngOnInit(): void {}
  
  
  get getresgistrousuarioService(){
    return this.resgistroUsuarioService
  }

  codUsuario:number=0
  dniUsuario:String=''
  NombreUsuario:String=''
  ApeliidoUsuario:String=''
  Usuario:String=''
  Contrasena:string=''
  Contrasenaa:String=''
  Celular:String=''
  Correo:string=''
  Direccion:String=''


  public nuevoUsuario =new Usuario(0,"","","","","","","","")


  crearUsuario(){
    this.getresgistrousuarioService.agregarUsuario(this.nuevoUsuario)
    console.log(this.nuevoUsuario)
  }



}
