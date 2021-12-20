import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Marca} from '../../../modelo/marca.class';
import { Observable, Subscription } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GestionMarcaservice{

    private baseUrl = "http://127.0.0.1:8080/api/marca"

    constructor(private http: HttpClient){}

    public listar: Marca[] = []

    listarMarca(){
        this.http.get<Marca[]>(this.baseUrl)
        .subscribe(resp => {
            this.listar = resp
        })
    }



    async agregarmarca(marca: Marca){
        const promesa = this.http.post<any>(this.baseUrl,marca).toPromise();
        return promesa.then(value =>{return true});
    }

    async eliminarmarca(id: number){
        const promesa = this.http.delete(this.baseUrl+'/'+id).toPromise();
        return promesa.then(value => {return true});
    }

    async atualizarmarca(id: number, marca: Marca){
        const promesa = this.http.put<any>(this.baseUrl+'/'+id, marca).toPromise();
        return promesa.then(value => {return true})
    }

   


}
