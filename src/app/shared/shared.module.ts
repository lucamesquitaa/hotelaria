import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';


//componentes PO-UI
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoButtonModule, PoFieldModule, PoModalModule, PoPageModule, PoSlideModule, PoTabsModule, PoToolbarModule, PoWidgetModule } from '@po-ui/ng-components';
import { PoPageLoginModule } from '@po-ui/ng-templates';
import { CartItemComponent } from './components/cart-item/cart-item.component';


@NgModule({
  imports: [CommonModule,ReactiveFormsModule, FormsModule, HttpClientModule, RouterModule, PoButtonModule, PoWidgetModule, PoPageLoginModule, PoTabsModule, PoToolbarModule, PoPageModule, PoFieldModule, PoModalModule, PoSlideModule],
  declarations: [
    CardComponent,
    CartItemComponent
  ],
  exports: [CartItemComponent,ReactiveFormsModule,FormsModule, HttpClientModule, RouterModule, PoButtonModule, PoWidgetModule, PoPageLoginModule, PoTabsModule, CardComponent, PoToolbarModule, PoPageModule, PoFieldModule, PoModalModule, PoSlideModule],
})
export class SharedModule { }
