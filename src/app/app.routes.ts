import { Routes } from '@angular/router';
import { AuthenticationGuard } from './shared/services/guardinha.guard';

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
];
