import { Component, Injector, ViewChild } from '@angular/core';
import { PoPageSlideComponent, PoSlideItem } from '@po-ui/ng-components';
import { AppComponent } from 'src/app/app.component';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ComponentBase {
  override onReceiveLiterals(): void {
    throw new Error('Method not implemented.');
  }

}

