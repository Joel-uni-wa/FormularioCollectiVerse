import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { NoEncontrado } from './no-encontrado/no-encontrado';
import { FormProducto} from './form-producto/form-producto';
import { FormUsuario } from './form-usuario/form-usuario';
import { FormPublica } from './form-publica/form-publica';
export const routes: Routes = [
    { path: '', component: Inicio, title: 'CollectiVerse ジ' },
    { path: 'inicio', component: Inicio, title: 'CollectiVerse ジ' },
    { path: 'form-producto', component: FormProducto, title: 'Formulario de Productos' },
    { path: 'form-usuario', component: FormUsuario, title: 'Registro de Usuarios' },
    { path: 'form-publica', component: FormPublica, title: 'Publicacion' },
    { path: '**', component: NoEncontrado, title: 'Not Found' }
];