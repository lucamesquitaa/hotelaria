import { Component, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { Product } from 'src/app/shared/models/product.model';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends ComponentBase{
  itemSelected!: Product;

  override onReceiveLiterals(): void {
  }

  constructor(activatedRoute: ActivatedRoute, override injector: Injector, private productsService: ProductsService) {
    super(injector);
    let id = this.activatedRoute.snapshot.params["id"];
    this.productsService.getProductById(id).subscribe((result) => {
      this.itemSelected = result;
    });
  }
}
