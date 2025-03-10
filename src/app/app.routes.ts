import { Routes } from '@angular/router';
import { AuthenticationGuard } from './shared/services/guardinha.guard';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'cadastro',
    loadComponent: () =>
      import('./features/cadastro/cadastro.component').then(m => m.CadastroComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'imc',
    loadComponent: () =>
      import('./features/imc/imc.component').then(m => m.IMCComponent),
    canActivate: [AuthenticationGuard]
  },
  {
    path:'**',
    redirectTo:''
  }
];
