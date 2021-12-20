import { Injectable } from "@angular/core";
import { Categoria } from '../../../modelo/categoria.class';
import { HttpClient} from '@angular/common/http';
import { GestionCategoriaMainComponent } from '../gestion-categoria-main.component';


@Injectable({
    providedIn:'root'
}
)
export class GestionCategoriaservice{
    constructor(private http:HttpClient){}


    async agregarcategoria(nombreCategoria:String){
        console.log(nombreCategoria)
        const nuevacategoria:Categoria=new Categoria(0,nombreCategoria)
        const promesa = this.http.post<Categoria>('http://localhost:8080/api/categoria',nuevacategoria).toPromise();
        return promesa.then(value =>{return true});
        //this.http.get<Categoria[]>('http://localhost:8080/api/categoria').subscribe((resp:Categoria[])=>{GestionCategoriaservice.categorias=resp});
    }

    async eliminarcategoria(eliminacion:number[]){
        for(let i:number=0;eliminacion.length>i;i++){
            const promesa = this.http.delete('http://localhost:8080/api/categoria'+'/'+eliminacion[i]).toPromise();
            
        }
        
    }
    public static categorias:Categoria[]=[];
    get categorias(){
        return GestionCategoriaservice.categorias
    }
    async listarCategoria(){
        this.http.get<Categoria[]>('http://localhost:8080/api/categoria').subscribe((resp:Categoria[])=>{GestionCategoriaservice.categorias=resp});
    }
    async actualizarCategoria(codcategoria:number,nombreCategoria:String){
        const nuevacategoria:Categoria=new Categoria(codcategoria,nombreCategoria)
        const promesa = this.http.put<any>('http://127.0.0.1:8080/api/categoria' + '/' + codcategoria, nuevacategoria).toPromise();
        return promesa.then(value => {return true})
    }
}