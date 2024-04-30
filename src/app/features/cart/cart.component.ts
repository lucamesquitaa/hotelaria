import { Component, Injector, OnInit } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent extends ComponentBase implements OnInit{

  total = 0;

  constructor(public override injector: Injector,
              public cartService: CartService
  ) {
    super(injector);

  }

  override onReceiveLiterals(): void {
  }

  override ngOnInit(){
  }
  onHandleCancelar(){

  }
  onHandleFinalizar(){

  }
}
