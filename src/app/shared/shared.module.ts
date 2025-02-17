import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';

//componentes Angular Material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

//componentes PO-UI
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoButtonModule, PoFieldModule, PoModalModule, PoPageModule, PoSlideModule, PoTabsModule, PoToolbarModule, PoWidgetModule } from '@po-ui/ng-components';
import { PoPageLoginModule } from '@po-ui/ng-templates';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SliderComponent } from './components/slider/slider.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [CommonModule,ReactiveFormsModule, FormsModule, HttpClientModule, MatCardModule,MatButtonModule, RouterModule, PoButtonModule, PoWidgetModule, PoPageLoginModule, PoTabsModule, PoToolbarModule, PoPageModule, PoFieldModule, PoModalModule, PoSlideModule, NgbCarouselModule],
  declarations: [
    CardComponent,
    CartItemComponent,
    SliderComponent
  ],
  exports: [CartItemComponent,SliderComponent,ReactiveFormsModule,FormsModule, MatCardModule,MatButtonModule, HttpClientModule, RouterModule, PoButtonModule, PoWidgetModule, PoPageLoginModule, PoTabsModule, CardComponent, PoToolbarModule, PoPageModule, PoFieldModule,NgbCarouselModule, PoModalModule, PoSlideModule],
})
export class SharedModule { }
