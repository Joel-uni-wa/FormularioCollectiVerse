
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface Usuario {
  nombreUsuario: string;
  correo: string;
  fechaNacimiento: string;
  password: string;
}

@Component({
  selector: 'app-form-usuario',
  imports: [FormsModule],
  templateUrl: './form-usuario.html',
  styleUrl: './form-usuario.css',
})
export class FormUsuario {

  // Fecha máxima para permitir usuarios de mínimo 10 años
  fechaMaxima = this.calcularFechaMaxima();

  calcularFechaMaxima(): string {
    const fecha = new Date();
    fecha.setFullYear(fecha.getFullYear() - 10);

    const anio = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const dia = String(fecha.getDate()).padStart(2, '0');

    return `${anio}-${mes}-${dia}`;
  }

  // Validar que el usuario tenga mínimo 10 años
  validarEdad(fechaNacimiento: string): boolean {
    if (!fechaNacimiento) return false;

    const fecha = new Date(fechaNacimiento + 'T00:00:00');
    const hoy = new Date();

    let edad = hoy.getFullYear() - fecha.getFullYear();

    const noCumplioAnios =
      hoy.getMonth() < fecha.getMonth() ||
      (hoy.getMonth() === fecha.getMonth() &&
       hoy.getDate() < fecha.getDate());

    if (noCumplioAnios) {
      edad--;
    }

    return edad >= 10;
  }

  onSubmit(form: NgForm) {
    if (form.invalid || !this.validarEdad(form.value.fechaNacimiento)) {
      return;
    }

    const usuario: Usuario = form.value;

    console.log('Usuario registrado correctamente:');

    console.log({
      nombreUsuario: usuario.nombreUsuario,
      correo: usuario.correo,
      fechaNacimiento: usuario.fechaNacimiento
    });

    form.resetForm();
  }
}
