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
export class HomeComponent extends ComponentBase implements OnInit {
  @ViewChild('pageSlide' , {static: true})
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
  }

  override ngOnInit(){
    let isCart;
    this.route.params.subscribe(params => {
      isCart = params['isCart'];
    });
    console.log("aqui");
      this.openPage();
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

  openPage() {
    this.cartService.getCart().subscribe((cart) =>{
        this.cartItens = this.itens.filter(x => cart.includes(x.id))
    });
    this.pageSlide.open();
  }
}

