import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ComponentBase } from '../component.base';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent extends ComponentBase {
  @Input()
  item!: Product;

  @Input()
  admin: boolean = false;

  @Output() eventoDoFilho = new EventEmitter();

  clickedHeart = false;

  override onReceiveLiterals(): void {
    throw new Error('Method not implemented.');
  }

  constructor(override injector: Injector,
              private cartService: CartService) {
    super(injector);
  }

  onHandleRemove(){
    
  }

  enviarEvento(id: number) {
    this.eventoDoFilho.emit(id);
  }
}
