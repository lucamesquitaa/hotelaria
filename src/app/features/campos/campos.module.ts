import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamposRoutingModule } from './campos-routing.module';
import { CamposComponent } from './campos.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CamposComponent],
  imports: [
    CommonModule,
    SharedModule,
    CamposRoutingModule
  ]
})
export class CamposModule { 

  
}
