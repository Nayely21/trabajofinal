import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../modelo/categoria.class';
import { GestionCategoriaservice } from './services/gestion-categoria.service';

@Component({
  selector: 'app-gestion-categoria-main',
  templateUrl: './gestion-categoria-main.component.html',
  styleUrls: ['./gestion-categoria-main.component.css']
})
export class GestionCategoriaMainComponent implements OnInit {

  constructor(
    public gestioncategoriaservice:GestionCategoriaservice,
  ) {
    this.gestioncategoriaservice.listarCategoria()
   }
  codcategoria:number=0
  nombreCategoria:String=""
   
 
  ngOnInit(): void {
    
  }

 
  agregar(){
      this.gestioncategoriaservice.agregarcategoria(this.nombreCategoria).then( value => {this.gestioncategoriaservice.listarCategoria();})
  }
  eliminacion:number[]=[]
  eliminar(){
    this.gestioncategoriaservice.eliminarcategoria(this.eliminacion).then(value =>{this.gestioncategoriaservice.listarCategoria();})
  }
  actualizar(){
    this.gestioncategoriaservice.actualizarCategoria(this.codcategoria,this.nombreCategoria).then(value =>{this.gestioncategoriaservice.listarCategoria();})
    //await this.gestioncategoriaservice.listarCategoria();
  }
  actializarcategoria(categoria:Categoria){
    this.codcategoria=categoria.codCategoria
    this.nombreCategoria=categoria.nombreCategoria
  }
  

  
}

