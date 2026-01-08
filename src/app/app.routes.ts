import { Routes } from '@angular/router';
import { AuthenticationGuard } from './shared/services/guardinha.guard';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'hotel',
    loadChildren: () =>
      import('./features/hotel/hotel.module').then(m => m.HotelModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'cadastro',
    loadChildren: () =>
      import('./features/cadastro/cadastro.module').then(m => m.CadastroModule),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'managers',
    loadChildren: () =>
      import('./features/managers/managers.module').then(m => m.ManagersModule),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'quartos',
    loadChildren: () =>
      import('./features/quartos/quartos.module').then(m => m.QuartosModule),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'campos',
    loadChildren: () =>
      import('./features/campos/campos.module').then(m => m.CamposModule),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'motor',
    loadChildren: () =>
      import('./features/motor/motor.module').then(m => m.MotorModule),
    canActivate: [AuthenticationGuard],
  },
];
