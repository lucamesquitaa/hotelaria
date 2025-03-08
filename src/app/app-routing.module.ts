import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { guardinhaGuard } from './shared/services/guardinha.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'cadastro',
    loadChildren: () =>
      import('./features/cadastro/cadastro.component').then(m => m.CadastroComponent),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
