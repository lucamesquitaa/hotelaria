import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenubarService {
  private isOpenSubject = new BehaviorSubject<boolean>(true);
  public isOpen$ = this.isOpenSubject.asObservable();

  constructor() { 
    // Inicializa baseado no tamanho da tela
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      this.isOpenSubject.next(false);
    }
  }

  toggle() {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }

  setOpen(isOpen: boolean) {
    this.isOpenSubject.next(isOpen);
  }

  get isOpen(): boolean {
    return this.isOpenSubject.value;
  }
}