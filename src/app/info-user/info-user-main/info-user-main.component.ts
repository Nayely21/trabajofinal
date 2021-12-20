import { Component, OnInit } from '@angular/core';

import { InfoUserService } from '../services/info-user.service';


@Component({
  selector: 'app-info-user-main',
  templateUrl: './info-user-main.component.html',
  styleUrls: ['./info-user-main.component.css']
})
export class InfoUserMainComponent implements OnInit {

  constructor(public infouserServices: InfoUserService) {
   }

  ngOnInit(): void {
  }

  get serviceUsuario(){
    return this.infouserServices
  }
  

  
}
