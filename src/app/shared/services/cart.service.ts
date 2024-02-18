import { Injectable } from '@angular/core';
import { ServiceGeneric } from './generic.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService extends ServiceGeneric{
  override urlServiceREST = '';
  override onReceiveLiterals(): void {
  }

  public cart = new BehaviorSubject<number[]>([]);

  setCart(idProduct: number){
    this.context?.cart.productsId.push(idProduct);
    this.context!.cart.number++;
    this.cart.next(this.context!.cart.productsId);
  }

  getCart(){
    return this.cart.asObservable();
  }
}
