import { CanActivateFn } from '@angular/router';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

Injectable({
  providedIn: 'root'
})
export const guardinhaGuard: CanActivateFn = (route, state) => {
  //logica para ver se tem um token valido
  if(!LoginService.getToken())
    return false;
  else
    return true;
};

