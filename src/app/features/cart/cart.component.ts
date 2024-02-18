import { Component, Inject, Injector, ViewChild } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { ToolbarComponent } from 'src/app/shared/components/toolbar/toolbar.component';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent extends ComponentBase {
  @ViewChild('app-toolbar')
  appToolbar!: ToolbarComponent;
  
  cartItens!: Product[];
  cartIds!: number[];

  constructor(public override injector: Injector, 
    private productsService: ProductsService, 
    private cartService: CartService){
    super(injector);

    this.cartService.getCart().subscribe((cart) =>{
      this.init(cart);
    })
  }

  init(cart: number[]){
    this.productsService.getProducts().subscribe((itens) => {
      this.cartItens = itens.filter(x => cart.includes(x.id));
    });
  }
  
  override onReceiveLiterals(): void {
  }
}
