import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Local} from '../../../modelo/local.class';

@Injectable({
    providedIn:'root'
})
export class GestionProveedorservice{
    constructor(private  http: HttpClient){
    }

    public lista: Local[] = [];

    listarProveedor(){
         this.http.get<Local>('http://127.0.0.1:8080/api/local')
         .subscribe((resp:any)=>{
            this.lista = resp;            
         });
     }
    async agregarProveedor(local:Local){
        const promesa = this.http.post<any>('http://127.0.0.1:8080/api/local',local).toPromise();
        return promesa.then(value=>{return true});
    }
    async eliminarlocall(id:number){
        const promesa =  this.http.delete('http://127.0.0.1:8080/api/local' + '/'+ id).toPromise();
        return promesa.then(value=>{return true});
    }

    async updateLocal(local:Local,id:number){
        const promesa =this.http.put<any>('http://127.0.0.1:8080/api/local' + '/'+ id,local).toPromise();
        return promesa.then(value=>{return true})
    }


    //  agregarproducto(nombreLocal:String,ubicacionLocal:String,rucLocal:String,contraseñaLocal:String){
    //     const nuevoProducto:Local=new Local("L000"+(locales.length+1),nombreLocal,ubicacionLocal,rucLocal,contraseñaLocal)
    //     locales.push(nuevoProducto);
    // }
    // eliminarproducto(eliminacion:number[]){
    //    eliminacion.sort(function(a, b){return b - a});
    //   for(let i:number=0;eliminacion.length>i;i++){
    //        locales.splice(eliminacion[i],1)
           
    //       }
    // }

}

//  export class GestionProveedorservice{
//     agregarproducto(nombreLocal:String,ubicacionLocal:String,rucLocal:String,contraseñaLocal:String){
//          const nuevoProducto:Local=new Local("L000"+(locales.length+1),nombreLocal,ubicacionLocal,rucLocal,contraseñaLocal)
//          locales.push(nuevoProducto);
//   }
//    eliminarproducto(eliminacion:number[]){
//         eliminacion.sort(function(a, b){return b - a});
//        for(let i:number=0;eliminacion.length>i;i++){
//             locales.splice(eliminacion[i],1)
            
//            }
//      }
// }