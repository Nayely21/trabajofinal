import { Component, OnInit } from '@angular/core';
import { Marca} from '../../modelo/marca.class';
import { GestionMarcaservice } from './services/gestion-marca.service';

@Component({
  selector: 'app-gestion-marca-main',
  templateUrl: './gestion-marca-main.component.html',
  styleUrls: ['./gestion-marca-main.component.css']
})
export class GestionMarcaMainComponent implements OnInit {

  constructor(
    private gestionmarcaservice:GestionMarcaservice
    
  ) { 
    this.gestionmarcaservice.listarMarca();
  }
  
  get listarmarcas(){
    return this.gestionmarcaservice.listar
  }


  nombreMarca:String=""
  nuevaMarca = new Marca(0,this.nombreMarca)
  actualizarMarca = new Marca(0,this.nombreMarca)

  crearMarca(){
    this.gestionmarcaservice.agregarmarca(this.nuevaMarca).then(value => {this.gestionmarcaservice.listarMarca();});
  }

  eliminarMarca(id: any){
    this.gestionmarcaservice.eliminarmarca(id).then(value => {this.gestionmarcaservice.listarMarca();})
  }

  actualizarvariable(marcaactualizado: Marca){
    this.actualizarMarca = marcaactualizado;
    this.gestionmarcaservice.listarMarca();
  }

  actualizarMarcaF(){
    this.gestionmarcaservice.atualizarmarca(this.actualizarMarca.codMarca,this.actualizarMarca).then(value => {this.gestionmarcaservice.listarMarca();})
  }
  
  ngOnInit(): void {
  }
  
  eliminacion:number[]=[]
  
  
}
