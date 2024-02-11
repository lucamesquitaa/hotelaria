import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const usuarioAutenticado = sessionStorage.getItem('isAuthenticated') === 'true';

    // O usuário não foi autenticado ?
    if (!usuarioAutenticado) {
      // Redireciona para a tela de login
      this.router.navigate(['login']);
    }
    return usuarioAutenticado;
  }
}
