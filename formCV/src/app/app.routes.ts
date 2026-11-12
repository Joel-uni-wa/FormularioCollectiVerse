import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { NoEncontrado } from './no-encontrado/no-encontrado';
import { FormProducto} from './form-producto/form-producto';
import { FormUsuario } from './form-usuario/form-usuario';
export const routes: Routes = [
    { path: '', component: Inicio, title: 'CollectiVerse ジ' },
    { path: 'inicio', component: Inicio, title: 'CollectiVerse ジ' },
    { path: 'form-producto', component: FormProducto, title: 'Formulario de Productos' },
    { path: 'form-usuario', component: FormUsuario, title: 'Registro de Usuarios' },
    { path: '**', component: NoEncontrado, title: 'Not Found' }
];