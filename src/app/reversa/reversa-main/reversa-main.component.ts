import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../services/reserva.service';

@Component({
  selector: 'app-reversa-main',
  templateUrl: './reversa-main.component.html',
  styleUrls: ['./reversa-main.component.css']
})
export class ReversaMainComponent implements OnInit {

  constructor(public reservaService:ReservaService) { 
    
  }

  ngOnInit(): void {
  }

}
