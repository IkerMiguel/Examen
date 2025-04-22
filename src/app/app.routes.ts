import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        loadComponent: () => import('./pages/home/home.component')
    },
    {
        path: 'users',
        loadComponent: () => import('./pages/users/users.component')
    }
];
