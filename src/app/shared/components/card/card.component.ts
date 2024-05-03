import { Component, Injector, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from '../../services/cart.service';
import { ComponentBase } from '../component.base';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent extends ComponentBase {
  @Input()
  item!: Product;

  clickedHeart = false;

  override onReceiveLiterals(): void {
    throw new Error('Method not implemented.');
  }

  constructor(override injector: Injector,
              private cartService: CartService) {
    super(injector);
  }

  onClickHeart(){
    this.clickedHeart = !this.clickedHeart;
    console.log(this.clickedHeart)
  }
  onHandleComprar(produto: Product){
    this.poNotificationService.success('Produto adicionado ao carrinho');
    this.cartService.setCart(produto);
  }
}
