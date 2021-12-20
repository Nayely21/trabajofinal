
import { ProductoLocal } from './productolocal.class';
import { Reserva} from './reserva.class';

export class DetalleReserva{
    constructor(
        public codDetalleReserva:number,
        public cantidadDetalleReserva:number,
        public tieneProductoLocal:ProductoLocal,
        public tieneReserva:Reserva
    ){

    }
  

}





