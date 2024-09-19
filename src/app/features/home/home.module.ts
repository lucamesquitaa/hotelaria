import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { NgbCarousel, NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [HomeComponent, FiltrosComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    NgbCarouselModule
  ],
  exports:[],
  providers: [NgbCarouselConfig],
  bootstrap:[HomeComponent]
})
export class HomeModule { }
