import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private readonly router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const usuarioAutenticado = sessionStorage.getItem('access_token') != null;

    // O usuário não foi autenticado ?
    if (!usuarioAutenticado) {
      // Redireciona para a tela de login
      this.router.navigate(['login']);
    }
    return usuarioAutenticado;
  }
}
