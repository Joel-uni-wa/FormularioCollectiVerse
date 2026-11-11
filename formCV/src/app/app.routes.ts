import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { NoEncontrado } from './no-encontrado/no-encontrado';
import { FormProducto} from './form-producto/form-producto';
export const routes: Routes = [
    { path: '', component: Inicio, title: 'CollectiVerse ジ' },
    { path: 'inicio', component: Inicio, title: 'CollectiVerse ジ' },
    { path: 'form-producto', component: FormProducto, title: 'Formulario de Productos' },
    { path: '**', component: NoEncontrado, title: 'Not Found' }
];