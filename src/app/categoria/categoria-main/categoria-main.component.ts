import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../modelo/categoria.class';
import { CategoriaService } from '../services/categoria.service';


@Component({
  selector: 'app-categoria-main',
  templateUrl: './categoria-main.component.html',
  styleUrls: ['./categoria-main.component.css']
})
export class CategoriaMainComponent implements OnInit {

  constructor(private categoriaServices:CategoriaService) { 
  }

  get categoriaservices(){
    return this.categoriaServices
  }

  ngOnInit(): void {
  }
  codCategoria:number=0;
  nombreCategoria:String='';

  public NuevaCategoria = new Categoria(0,this.nombreCategoria)


  
}