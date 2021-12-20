import { Local} from './local.class';
import { Producto } from './producto.class';

export class ProductoLocal{
    constructor(
        public codProductoLocal:number,
        public precioProductoLocal:number,
        public tieneLocal:Local,
        public tieneProducto:Producto
    ){}
   
}
