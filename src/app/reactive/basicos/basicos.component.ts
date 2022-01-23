import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

  ngOnInit() {
    this.miFormulario.reset({
      nombre: 'Planta',
      precio: 2,
      existencias: 10
    })
  }

 // miFormulario: FormGroup = new FormGroup({
 //   nombre      : new FormControl('Lapiz'),
 //   precio      : new FormControl(50),
 //   existencias : new FormControl(1500)
 // })

 miFormulario: FormGroup = this.fb.group({
   nombre: ['', [Validators.required, Validators.minLength(3)]],
   precio: [0, [Validators.min(0), Validators.required]],
   existencias: [0, [Validators.min(0), Validators.required]]
 })

  constructor( private fb: FormBuilder ) { }

  campoEsValido( campo:string ) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return
    }


    console.log(this.miFormulario.value);
  }

}
