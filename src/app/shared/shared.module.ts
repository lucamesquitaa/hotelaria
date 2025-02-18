import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';

//componentes Angular Material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

//componentes PO-UI
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoButtonModule, PoFieldModule, PoModalModule, PoPageModule, PoSlideModule, PoTabsModule, PoToolbarModule, PoWidgetModule } from '@po-ui/ng-components';
import { PoPageLoginModule } from '@po-ui/ng-templates';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SliderComponent } from './components/slider/slider.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from './components/dialog/dialog.component';



@NgModule({
  imports: [CommonModule,ReactiveFormsModule, FormsModule, HttpClientModule, MatCardModule,MatInputModule,MatButtonModule,MatIconModule,MatDialogModule, RouterModule, PoButtonModule, PoWidgetModule, PoPageLoginModule, PoTabsModule, PoToolbarModule, PoPageModule, PoFieldModule, PoModalModule, PoSlideModule, NgbCarouselModule],
  declarations: [
    CardComponent,
    CartItemComponent,
    SliderComponent,
    DialogComponent
  ],
  exports: [CartItemComponent,SliderComponent,ReactiveFormsModule,FormsModule, MatCardModule,MatInputModule,MatButtonModule,MatIconModule,MatDialogModule, HttpClientModule, RouterModule, PoButtonModule, PoWidgetModule, PoPageLoginModule, PoTabsModule, CardComponent, PoToolbarModule, PoPageModule, PoFieldModule,NgbCarouselModule, PoModalModule, PoSlideModule],
})
export class SharedModule { }
