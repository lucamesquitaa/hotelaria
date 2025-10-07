import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CafeteriaRoutingModule } from './cafeteria-routing.module';
import { CafeteriaComponent } from './cafeteria.component';
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  declarations: [CafeteriaComponent],
  imports: [
    CommonModule,
    CafeteriaRoutingModule,
    SharedModule
]
})
export class CafeteriaModule { }
