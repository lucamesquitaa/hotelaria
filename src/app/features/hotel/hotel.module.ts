import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { HotelComponent } from './hotel.component';


@NgModule({
  declarations: [
    HotelComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    SharedModule,
    GoogleMapsModule,
  ]
})
export class HotelModule { }
