import { Component, OnInit } from '@angular/core';
import {  ProductoLocal } from '../../modelo/productolocal.class';
import { ProductoService } from '../services/producto.service';
import {Categoria } from '../../modelo/categoria.class';
import { Marca } from 'src/app/modelo/marca.class';
import { Producto } from 'src/app/modelo/producto.class';
import { Local } from 'src/app/modelo/local.class';
@Component({
  selector: 'app-productos-main',
  templateUrl: './productos-main.component.html',
  styleUrls: ['./productos-main.component.css']
})
export class ProductosMainComponent implements OnInit {

  constructor(public productoService:ProductoService) {  
  }


  ngOnInit(): void {
  }

  
  get lista1(){
    return this.productoService.lista1;
  }
  codProductoLocal:number=0;
  precioProductoLocal:number=0;
  localProductoLocal:Local[]=[]
  producto:Producto[]=[]

  public NuevoProductoLocal=new ProductoLocal(0,this.precioProductoLocal,this.localProductoLocal[0],this.producto[0])
  
  
  





    
}
