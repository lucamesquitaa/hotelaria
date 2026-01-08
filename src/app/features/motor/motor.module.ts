import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotorRoutingModule } from './motor-routing.module';
import { MotorComponent } from './motor.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MotorComponent],
  imports: [
    CommonModule,
    SharedModule,
    MotorRoutingModule
  ]
})
export class MotorModule { }
