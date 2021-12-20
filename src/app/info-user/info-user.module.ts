import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoUserMainComponent } from './info-user-main/info-user-main.component';



@NgModule({
  declarations: [
    InfoUserMainComponent
  ],
  exports:[
    InfoUserMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InfoUserModule { }
