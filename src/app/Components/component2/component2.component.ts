import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor() { }  
  Nombre:any
  correo:any
  contraseña:any
  confirmarcontra:any
  telefono:any
  ngOnInit() {
    this.recuperar()
  }

  recuperar(){
    this.Nombre= localStorage.getItem('Nombre')
    this.correo= localStorage.getItem('correo')
    this.contraseña= localStorage.getItem('contraseña')
    this.confirmarcontra= localStorage.getItem('confir' )
    this.telefono= localStorage.getItem('telefono')

  }
}
