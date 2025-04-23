import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'users',
        loadComponent: () => import('./pages/home/home.component')
    },
    {
        path: 'users',
        title: 'Users',
        loadComponent: () => import('./pages/home/home.component')
    },
    {
        path: 'usersDetail',
        title: 'UsersDetail',
        loadComponent: () => import('./pages/detalle-usuario/detalle-usuario.component')
    },
    {
        path: '**',
        loadComponent: () => import('./pages/home/home.component')
    }
];
