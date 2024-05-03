import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import { ServiceGeneric } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class CartService extends ServiceGeneric{
  override urlServiceREST = '';

  override onReceiveLiterals(): void {
  }
  public cart = new BehaviorSubject<Product[]>([]);

  setCart(product: Product){
    this.context!.cart.products.push(product);
    this.context!.cart.number += product.price;
    this.cart.next(this.context!.cart.products);
  }

  getCart(){
    return this.cart.asObservable();
  }
}
