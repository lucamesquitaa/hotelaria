import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartComponent } from './cart.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [CartComponent],
  imports: [
    SharedModule,
    CommonModule,
    CartRoutingModule,
    HomeModule
  ]
})
export class CartModule { }
