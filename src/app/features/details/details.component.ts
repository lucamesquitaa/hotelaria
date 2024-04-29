import { Component, Injector, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends ComponentBase{
  itemSelected!: Product;

  appComponent!: AppComponent;

  override onReceiveLiterals(): void {
  }

  constructor(activatedRoute: ActivatedRoute,
    override injector: Injector,
    private productsService: ProductsService,
    private cartService: CartService) {
    super(injector);
    let id = this.activatedRoute.snapshot.params["id"];
    this.productsService.getProductById(id).subscribe((result) => {
      this.itemSelected = result;
    });
  }
  onHandleCancelar(){
    this.router.navigate(['/home']);
  }
  onHandleComprar(produto: Product){
    this.poNotificationService.success('Produto adicionado ao carrinho');
    this.cartService.setCart(produto);
  }
}
