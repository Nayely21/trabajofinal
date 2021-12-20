import { getLocaleDateFormat, getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  Reserva } from '../../modelo/reserva.class';
import { ServiciosService } from '../servicios.service';
import { Usuario } from 'src/app/modelo/usuario.class';
import { Local } from 'src/app/modelo/local.class';
@Component({
  selector: 'app-entrega-pedidos-main',
  templateUrl: './entrega-pedidos-main.component.html',
  styleUrls: ['./entrega-pedidos-main.component.css']
})
export class EntregaPedidosMainComponent implements OnInit {

  constructor(public entregaService: ServiciosService) { 
  }

  ngOnInit(): void {

  }

  
}
