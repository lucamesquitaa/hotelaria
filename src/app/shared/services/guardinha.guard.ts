import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ComponentBase } from '../components/component.base';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard extends ComponentBase implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const token = this.cookieService.get('access_token');

    // O usuário não foi autenticado ?
    if (!token) {
      // Redireciona para a tela de login
      this.router.navigate(['login']);
    }
    return token ? true : false;
  }
}
