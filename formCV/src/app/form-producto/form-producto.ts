import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface Estudiante {
  nombre: string;
  apellido: string;
  dni: string;
  numero: string;
  email: string;
  sexo: string;
  edad: number;
  universidad: string;
  juego: string;
}

@Component({
  selector: 'app-form-producto',
  imports: [FormsModule],
  templateUrl: './form-producto.html',
  styleUrl: './form-producto.css',
})
export class FormProducto {
  universidades = ['ULASALLE', 'UNSA', 'UCSM', 'UTP', 'UCSP'];
  estudiantes = signal<Estudiante[]>([]);

  onSubmit(form: NgForm) {
    this.estudiantes.update((lista) => [...lista, form.value as Estudiante]);
    form.resetForm();
  }
}
