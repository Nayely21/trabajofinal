import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroUsuarioMainComponent } from './registro-usuario-main/registro-usuario-main.component';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistroUsuarioMainComponent
  ],
  exports:[
    RegistroUsuarioMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RegistroUsuarioModule { }
