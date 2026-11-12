
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface Publicacion {
  titulo: string;
  descripcion: string;
  tipo: string;
  estado: string;
}

@Component({
  selector: 'app-form-publica',
  imports: [FormsModule],
  templateUrl: './form-publica.html',
  styleUrl: './form-publica.css',
})
export class FormPublica {

  tiposPublicacion = [
    'Venta',
    'Tradeo',
    'Ambos'
  ];

  estadosProducto = [
    'Nuevo',
    'Usado',
    'Rayado',
    'Deteriorado'
  ];

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    const publicacion: Publicacion = form.value;

    console.log('Publicación creada correctamente:');
    console.log(publicacion);

    form.resetForm();
  }
}
