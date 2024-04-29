import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoPageSlideComponent } from '@po-ui/ng-components';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ComponentBase {
  @ViewChild('pageSlide')
  pageSlide!: PoPageSlideComponent;

  override onReceiveLiterals(): void {
  }

  titleDetailsModal!: string;

  itemSelected!: any;

  itens!: Product[];
  filteredItens!: Product[];
  category!: any;

  cartItens!: any[];

  constructor(private productService: ProductsService,
              private cartService: CartService,
              public override injector: Injector,
              private route: ActivatedRoute){
    super(injector);
    this.productService.getProducts().subscribe((item) => {
      this.itens = item;
      this.filteredItens = this.itens;
      const set = new Set()
      this.category = new Set(this.itens.map((x => x.category)));
    });

    this.cartService.getCart()?.subscribe((cart: Product[]) =>{
      this.context.cart.products = this.itens.filter(x => cart.map(y => y.id).includes(x.id));
    });
  }

  handleCategory(categorySeleced: any){
    if(categorySeleced == 'all')
      this.filteredItens = this.itens;
    else
      this.filteredItens = this.itens.filter(x => x.category == categorySeleced);
  }

  showDetailPage(itemId: number) {
    this.router.navigate([`details/${itemId}`]);
  }
}

