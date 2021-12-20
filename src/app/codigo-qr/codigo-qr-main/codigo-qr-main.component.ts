import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleReserva } from 'src/app/modelo/detallereserva.class';

@Component({
  selector: 'app-codigo-qr-main',
  templateUrl: './codigo-qr-main.component.html',
  styleUrls: ['./codigo-qr-main.component.css']
})
export class CodigoQrMainComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute, private http:HttpClient) { 
    this.http.get<DetalleReserva[]>('http://localhost:8080/api/detallereservaporReserva/'+ this.rutaActiva.snapshot.params.idusuario + '/' + this.rutaActiva.snapshot.params.idreserva).toPromise().then((resp:DetalleReserva[])=>{this.detallereserva=resp;});
  
  }

  detallereserva: DetalleReserva[]=[];
  get detallereservalista(){
    return this.detallereserva;
  }

  ngOnInit(): void {
    }

}
