import { Local} from './local.class';
import { Usuario} from "./usuario.class";

export class Reserva{
    constructor(
        public codReserva:number,
        public fechaReserva:Date,
        public estadoReserva:boolean,
        public tieneUsuario:Usuario,
        public tieneLocal1:Local
    ){

    }
    
    

}
