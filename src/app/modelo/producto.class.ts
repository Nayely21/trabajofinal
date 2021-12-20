import { Marca} from "./marca.class";
import { Categoria } from './categoria.class';

export class Producto{
    constructor(
        public codProducto:number,
        public nombreProducto:String,
        public mililitrosProducto:number,
        public descripcionProducto:String,
        public volalcoholProducto:number,
        public imagenProducto:String,
        public tieneMarca:Marca,
        public tieneCategoria:Categoria,
    ){
        
    }
    
}

