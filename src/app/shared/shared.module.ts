import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';


//componentes PO-UI
import { FormsModule } from '@angular/forms';
import { PoButtonModule, PoFieldModule, PoPageModule, PoTabsModule, PoToolbarModule, PoWidgetModule } from '@po-ui/ng-components';
import { PoPageLoginModule } from '@po-ui/ng-templates';
import { CartItemComponent } from './components/cart-item/cart-item.component';


@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule, PoButtonModule, PoWidgetModule, PoPageLoginModule, PoTabsModule, PoToolbarModule, PoPageModule, PoFieldModule],
  declarations: [
    CardComponent,
    CartItemComponent
  ],
  exports: [CartItemComponent,FormsModule, HttpClientModule, RouterModule, PoButtonModule, PoWidgetModule, PoPageLoginModule, PoTabsModule, CardComponent, PoToolbarModule, PoPageModule, PoFieldModule],
})
export class SharedModule { }
