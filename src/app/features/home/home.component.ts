import { Component, Injector, ViewChild } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { Product } from 'src/app/shared/models/product.model';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ComponentBase {

  override onReceiveLiterals(): void {
  }

  titleDetailsModal!: string;

  itemSelected!: any;

  itens!: Product[];
  filteredItens!: Product[];
  category!: any;

  constructor(private productService: ProductsService, public override injector: Injector){
    super(injector);
    this.productService.getProducts().subscribe((item) => {
      this.itens = item;
      this.filteredItens = [...this.itens];
      const set = new Set()
      this.category = new Set(this.itens.map((x => x.category)));
    });
  }

  handleCategory(categorySeleced: any){
    if(categorySeleced == 'all')
      this.filteredItens = [...this.itens];
    else
      this.filteredItens = this.itens.filter(x => x.category == categorySeleced);
  }

  showDetailPage(itemId: number) {
    this.router.navigate([`details/${itemId}`]);
  }
}
