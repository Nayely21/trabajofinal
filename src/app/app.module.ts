import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { CodigoQrModule } from './codigo-qr/codigo-qr.module';
import { InfoUserModule } from './info-user/info-user.module';
import { ProductosModule } from './productos/productos.module';
import { ReversaModule } from './reversa/reversa.module';
import { UbicacionModule } from './ubicacion/ubicacion.module';
import { CategoriaModule } from './categoria/categoria.module';
import { DescripcionBoletaModule } from './descripcion-boleta/descripcion-boleta.module';
import { RegistroUsuarioModule } from './registro-usuario/registro-usuario.module';
import { EntregaPedidosModule } from './entrega-pedidos/entrega-pedidos.module';
import { GestionModule } from './gestion/gestion.module';
import { GestionDistribuidorModule } from './gestion-distribuidor/gestion-distribuidor.module';
import { CommonVistaModule } from './common-vista/common-vista.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  // exports:[
  //   CodigoQrComponent,
  //   PageTragosComponent
  // ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    CodigoQrModule,
    InfoUserModule,
    ProductosModule,
    ReversaModule,
    UbicacionModule,
    CategoriaModule,
    DescripcionBoletaModule,
    RegistroUsuarioModule,
    EntregaPedidosModule,
    GestionModule,
    GestionDistribuidorModule,
    CommonVistaModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
