import { AfterContentInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(
  ) { 

  }
  localactivo=localStorage.getItem("localactivo")
  usuarioactivo=localStorage.getItem("usuarioactivo")
  adminactivo=localStorage.getItem("adminactivo")

  ngOnInit(): void {
    localStorage.setItem("categoriaactiva","")
  }
  borrar(){
    this.localactivo='';
    this.usuarioactivo=""
    this.adminactivo=""
  localStorage.setItem("localactivo","")
  localStorage.setItem("usuarioactivo","")
  localStorage.setItem("adminactivo","")

  }
}



