import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionCategoriaMainComponent } from './gestion-categoria-main/gestion-categoria-main.component';
import { GestionProductoMainComponent } from './gestion-producto-main/gestion-producto-main.component';
import { GestionMarcaMainComponent } from './gestion-marca-main/gestion-marca-main.component';
import { GestionProveedorMainComponent } from './gestion-proveedor-main/gestion-proveedor-main.component';
import { FormsModule } from '@angular/forms';
import { GestionCategoriaservice } from './gestion-categoria-main/services/gestion-categoria.service';
import { GestionMarcaservice } from './gestion-marca-main/services/gestion-marca.service';
import { Gestionproductoservice } from './gestion-producto-main/services/gestion-producto.service';
import { GestionProveedorservice } from './gestion-proveedor-main/services/gestion-proveedor.service';
import { TotalGestionComponent } from './total-gestion/total-gestion.component';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    GestionCategoriaMainComponent,
    GestionProductoMainComponent,
    GestionMarcaMainComponent,
    GestionProveedorMainComponent,
    TotalGestionComponent,
    
  ],
  exports:[
    GestionCategoriaMainComponent,
    GestionProductoMainComponent,
    GestionMarcaMainComponent,
    GestionProveedorMainComponent,
    TotalGestionComponent
  ],
  imports: [
    CommonModule,FormsModule,AppRoutingModule
  ],
  providers:[
    GestionCategoriaservice,
    GestionMarcaservice,
    Gestionproductoservice,
    GestionProveedorservice
  ]
})
export class GestionModule { }
