import { Component, Input, OnInit } from '@angular/core';
import { __importDefault } from 'tslib';
import { GestionDistribuidorService } from '../service/gestion-distribuidor.service';
import { Producto} from '../../modelo/producto.class';
import { Marca } from '../../modelo/marca.class';
import { Categoria } from '../../modelo/categoria.class';

@Component({
  selector: 'app-producto-distrubuidor-precio',
  templateUrl: './producto-distrubuidor-precio.component.html',
  styleUrls: ['./producto-distrubuidor-precio.component.css']
})
export class ProductoDistrubuidorPrecioComponent implements OnInit {

  constructor(private productolocalservice:GestionDistribuidorService) { }

  ngOnInit(): void {
  }
  get getproductolocalservice(){
    return this.productolocalservice
  }
  marca:Marca=new Marca(1,"")
  categoria:Categoria=new Categoria(0,"")
  @Input()
  producto:Producto=new Producto(1,"",0,"",0,"",this.marca,this.categoria)
  precio=0
}
