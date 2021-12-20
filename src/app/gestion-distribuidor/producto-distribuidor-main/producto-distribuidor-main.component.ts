import { Component, OnInit } from '@angular/core';
import { GestionDistribuidorService } from '../service/gestion-distribuidor.service';

@Component({
  selector: 'app-producto-distribuidor-main',
  templateUrl: './producto-distribuidor-main.component.html',
  styleUrls: ['./producto-distribuidor-main.component.css']
})
export class ProductoDistribuidorMainComponent implements OnInit {

  constructor(private productolocalservice:GestionDistribuidorService) { }

  ngOnInit(): void {
  }
  get getproductolocalservice(){
    return this.productolocalservice
  }
  
 precio=0
}