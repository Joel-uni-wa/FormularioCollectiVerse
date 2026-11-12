
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface Producto {
  nombre: string;
  stock: number;
  precio: number;
  categoria: string;
}

@Component({
  selector: 'app-form-producto',
  imports: [FormsModule],
  templateUrl: './form-producto.html',
  styleUrl: './form-producto.css',
})
export class FormProducto {

  categorias = [
    'Cartas coleccionables',
    'Figuras',
    'Peluches',
    'Videojuegos',
    'Accesorios',
    'Otros'
  ];

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    const producto: Producto = form.value;

    console.log('Producto registrado correctamente:');
    console.log(producto);

    form.resetForm();
  }
}
