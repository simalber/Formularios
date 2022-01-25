import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

  @ViewChild ('miFormulario') miFormulario!: NgForm;

  initForm = {
    Producto   : 'Libro',
    Precio     : 10,
    Existencias: 20
  }

  constructor() { }

  ngOnInit(): void {
  }

  precioValido() : boolean {
    return this.miFormulario?.controls['Precio']?.touched && this.miFormulario?.controls['Precio']?.value < 0;
  }

  nombreValido () : boolean {
    return this.miFormulario?.controls['Producto']?.invalid && this.miFormulario?.controls['Producto'].touched;
  }

  guardar( ) {
    console.log('Posteo correcto');

    this.miFormulario.resetForm({
      Precio: 0,
      Existencias: 0
    })
  }

}
