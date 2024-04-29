import { Component, Injector } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent extends ComponentBase{

  cartItens!: number[];

  constructor(public override injector: Injector,
              public cartService: CartService
  ) {
    super(injector);

  }

  override onReceiveLiterals(): void {
  }

  init(){

  }
}
