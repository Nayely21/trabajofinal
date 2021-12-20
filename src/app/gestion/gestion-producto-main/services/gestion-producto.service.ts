import { Injectable } from "@angular/core";
import { Producto } from '../../../modelo/producto.class';
import { Marca } from '../../../modelo/marca.class';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class Gestionproductoservice{

    constructor( private http: HttpClient){
    }
    public lista: Producto[] = [];


    // agregarproducto(nombreProducto:String,mililitrosProducto:number,descripcionProducto:String,volalcoholProducto:number,imagenPRoducto:String,marcaProducto:Marca,categoriaproducto:Categoria){
    //     const nuevoProducto:Producto=new Producto("P00"+(productos.length+1),nombreProducto,mililitrosProducto,descripcionProducto,volalcoholProducto,imagenPRoducto,marcaProducto,categoriaproducto)
    //     productos.push(nuevoProducto);
    // }
    // eliminarproducto(eliminacion:number[]){
    //     eliminacion.sort(function(a, b){return b - a});
    //     for(let i:number=0;eliminacion.length>i;i++){
    //         productos.splice(eliminacion[i],1)
    //       }
    // }

    listarProductos(){
        this.http.get<Producto[]>('http://127.0.0.1:8080/api/producto')
        .subscribe(resp => {
            this.lista = resp;
        });
    }

    async agregarProducto(producto: Producto){
        const promesa = this.http.post<any>('http://127.0.0.1:8080/api/producto', producto).toPromise();
        return promesa.then(value => {return true})
    }

    async deleteProducto(id:number){
        const promesa = this.http.delete('http://127.0.0.1:8080/api/producto' + '/'+ id).toPromise();
        return promesa.then(value =>{return true})
    }

    async updateProducto(producto: Producto, id: number){
        const promesa = this.http.put<any>('http://127.0.0.1:8080/api/producto' + '/' + id, producto).toPromise();
        return promesa.then(value =>{return true})
        
    }
}
