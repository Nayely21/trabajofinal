import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleReserva } from 'src/app/modelo/detallereserva.class';
import { descripcionboletaService } from '../services/descripcion-boleta.service';


@Component({
  selector: 'app-descripcion-boleta-main',
  templateUrl: './descripcion-boleta-main.component.html',
  styleUrls: ['./descripcion-boleta-main.component.css']
})
export class DescripcionBoletaMainComponent implements OnInit {

  constructor(
    public  descripcionboletaService: descripcionboletaService, private rutaActiva: ActivatedRoute, private http:HttpClient){
      this.http.get<DetalleReserva[]>('http://localhost:8080/api/detallereservaporReserva/'+ this.rutaActiva.snapshot.params.idreserva).toPromise().then((resp:DetalleReserva[])=>{descripcionboletaService.detallereserva=resp;});
   }

   detallereserva: DetalleReserva[]=[];
  get detallereservalista(){
    return this.detallereserva;
  }


   idReserva = 0

  ngOnInit(): void {
    this.idReserva = this.rutaActiva.snapshot.params.idreserva;
    console.log(this.idReserva)
  }

}



