import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginMainComponent } from './login/login-main/login-main.component';
import { CategoriaMainComponent } from './categoria/categoria-main/categoria-main.component';
import { InicioComponent } from './webpage/inicio/inicio.component';
import { ProductosMainComponent } from './productos/productos-main/productos-main.component';
import { CodigoQrMainComponent } from './codigo-qr/codigo-qr-main/codigo-qr-main.component';
import { DescripcionBoletaMainComponent } from './descripcion-boleta/descripcion-boleta-main/descripcion-boleta-main.component';
import { EntregaPedidosMainComponent } from './entrega-pedidos/entrega-pedidos-main/entrega-pedidos-main.component';
import { GestionCategoriaMainComponent } from "./gestion/gestion-categoria-main/gestion-categoria-main.component";
import { GestionMarcaMainComponent } from './gestion/gestion-marca-main/gestion-marca-main.component';
import { GestionProductoMainComponent } from './gestion/gestion-producto-main/gestion-producto-main.component';
import { GestionProveedorMainComponent } from './gestion/gestion-proveedor-main/gestion-proveedor-main.component';
import { ProductoDistribuidorMainComponent } from "./gestion-distribuidor/producto-distribuidor-main/producto-distribuidor-main.component";
import { InfoUserMainComponent } from './info-user/info-user-main/info-user-main.component';
import { RegistroUsuarioMainComponent } from './registro-usuario/registro-usuario-main/registro-usuario-main.component';
import { ReversaMainComponent } from './reversa/reversa-main/reversa-main.component';
import { TotalGestionComponent } from './gestion/total-gestion/total-gestion.component';




const routes: Routes = [
    {
        path: '',
        component: ProductosMainComponent,
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginMainComponent,
        pathMatch: 'full'
    },
    {
        path: 'categorias',
        component: CategoriaMainComponent,
        pathMatch: 'full'
    },
    {
        path: 'codigo-qr',
        component: CodigoQrMainComponent,
        pathMatch: 'full'
    },
    {
        path: 'descripcion-boleta/:idreserva',
        component: DescripcionBoletaMainComponent,
        pathMatch: 'full'
    },
    {
        path: 'entrega-pedidos',
        component: EntregaPedidosMainComponent,
        pathMatch: 'full'
    },
    {
        path: 'gestion-categoria',
        component: GestionCategoriaMainComponent,
        pathMatch: 'full'
    },
    {
        path: 'gestion-marca',
        component: GestionMarcaMainComponent,
        pathMatch: 'full'
    },
    {
        path: 'gestion-producto',
        component: GestionProductoMainComponent,
        pathMatch: 'full'
    },
    {
        path: 'gestion-proveedor',
        component: GestionProveedorMainComponent,
        pathMatch: 'full'
    },
    {
        path: 'total-gestion',
        component: TotalGestionComponent,
        pathMatch: 'full'
    },
    {
        path: 'gestion-distribuidor',
        component: ProductoDistribuidorMainComponent,
        pathMatch: 'full'
    },
    {
        path: 'info-user',
        component: InfoUserMainComponent,
        pathMatch: 'full'
    },
    {
        path: 'productos',
        component: ProductosMainComponent,
        pathMatch: 'full'
    },
    {
        path: 'registro-usuario',
        component: RegistroUsuarioMainComponent,
        pathMatch: 'full'
    },
    {
        path: 'reserva',
        component: ReversaMainComponent,
        pathMatch: 'full'
    },
    

    {
        path: '**',
        redirectTo: ""
    },
    
    

];


@NgModule({
    imports:[
        RouterModule.forRoot(routes)

    ],
    exports:[
        RouterModule
    ]


})
export class AppRoutingModule{

}
