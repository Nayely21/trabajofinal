import { Injectable } from '@angular/core';
import { Categoria} from '../../modelo/categoria.class';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private route:Router,private http:HttpClient) { 
    this.http.get<Categoria[]>('http://127.0.0.1:8080/api/categoria').subscribe((resp:Categoria[])=>{this.categoriass=resp;
    });
  }
  categoriass:Categoria[]=[]

  get categorias(){
    return this.categoriass
  }

  

  ingresar(categoria:Categoria){
    localStorage.setItem("categoriaactiva",categoria.codCategoria.toString())
  }
}
export const categoriaActiva:Categoria[]=[]