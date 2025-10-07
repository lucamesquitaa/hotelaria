import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'catalogo',
    loadChildren: () =>
      import('./features/catalogo/catalogo.module').then(m => m.CatalogoModule),
  },
  {
    path: 'cafeteria/:id',
    loadChildren: () =>
      import('./features/cafeteria/cafeteria.module').then(m => m.CafeteriaModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then(m => m.LoginModule),
  },
];
