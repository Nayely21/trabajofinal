import { Component, OnInit } from '@angular/core';
import { Gestionproductoservice } from './services/gestion-producto.service';
import { Producto } from '../../modelo/producto.class';
import { Categoria} from '../../modelo/categoria.class';
import { Marca} from '../../modelo/marca.class';


@Component({
  selector: 'app-gestion-producto-main',
  templateUrl: './gestion-producto-main.component.html',
  styleUrls: ['./gestion-producto-main.component.css']
})
export class GestionProductoMainComponent implements OnInit {

  constructor(private gestionproductoservice:Gestionproductoservice ) {
    this.gestionproductoservice.listarProductos();
   }
  
  // nombreProducto:string=""
  // mililitrosProducto:number=0
  // descripcionProducto:String=""
  // volalcoholProducto:number=0
  // imagenProducto:String=""
  // marcaProducto:Marca=marcas[0]
  // categoriaProducto:Categoria=categorias[0]

  // marcas:Marca[]=marcas
  // categorias:Categoria[]=categorias
  // productos:Producto[]=productos



  ngOnInit(): void {
  }


  // agregar(){
  //   this.gestionproductoservice.agregarproducto(this.nombreProducto,this.mililitrosProducto,this.descripcionProducto,this.volalcoholProducto,this.imagenProducto,this.marcaProducto,this.categoriaProducto)
  // }
  // eliminar(){
  //   this.gestionproductoservice.eliminarproducto(this.eliminacion)
  //   this.eliminacion=[]

  // }

  get lista() {
    return this.gestionproductoservice.lista;
  }


public marca01=new Marca(1,"Cartabio")
public ron =new Categoria(17,"Ron")

public nuevoProducto =new Producto(0,"",0,"",0,"",this.marca01,this.ron)
public actualizarProducto =new Producto(0,"",0,"",0,"",this.marca01,this.ron)


  ProductoActu(ProductoAActualizar: Producto){
    this.actualizarProducto = ProductoAActualizar
    this.gestionproductoservice.listarProductos();
  }

  crearProducto(){
    this.gestionproductoservice.agregarProducto(this.nuevoProducto).then(value =>{this.gestionproductoservice.listarProductos();})
  }
  eliminarProducto(id: number){
    this.gestionproductoservice.deleteProducto(id).then(value => {this.gestionproductoservice.listarProductos();});
  }

  actualizarProductoF(){
    this.gestionproductoservice.updateProducto(this.actualizarProducto, this.actualizarProducto.codProducto).then(value =>{this.gestionproductoservice.listarProductos();})

  }

}
