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
  clickedHeart = false;

  titleDetailsModal!: string;

  itemSelected!: any;

  itens!: Product[];
  filteredItens!: Product[];

  category = [
    {
      icon: "po-icon po-icon-device-desktop",
      name: "all"
    },
    {
      icon: "po-icon po-icon-device-desktop",
      name: "cel"
    },
    {
      icon: "po-icon po-icon-device-desktop",
      name: "note"
    },
  ];

  constructor(private productService: ProductsService, public override injector: Injector){
    super(injector);
    this.productService.getProducts().subscribe((item) => {
      this.itens = item;
      this.filteredItens = [...this.itens];
    });
  }

  showDetailPage(itemId: number) {
    this.router.navigate([`details/${itemId}`]);
  }

  onClickHeart(){
    this.clickedHeart = !this.clickedHeart;
    console.log(this.clickedHeart)
  }

  onClickCategory(categoryName: any){
    this.filteredItens = [];

    if(categoryName == 'all'){
      this.filteredItens = this.itens;
      return;
    }
    console.log(categoryName)
    this.filteredItens = this.itens.filter(x => x.category == categoryName);
  }
}
