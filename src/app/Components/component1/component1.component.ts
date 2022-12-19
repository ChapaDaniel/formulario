import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})


export class Component1Component implements OnInit {

  Nombre:Text
  correo:Text
  contrasena:Text
  confirmarcontra:Text
  c:Text
  telefono:number
  

  constructor(private router:Router) { }//Navegar
  ngOnInit() {
    localStorage.clear();//Borrar datos en LocalStorge
  }

  almacenaste(){
    localStorage.setItem('Nombre', this.Nombre.toString())
    localStorage.setItem('correo', this.correo.toString())
    localStorage.setItem('contrasena', this.contrasena.toString())
    localStorage.setItem('confir', this.confirmarcontra.toString())
    localStorage.setItem('telefono', this.telefono.toString())

  }



  navega2(){
    this.router.navigate(['2'])
  }
}
