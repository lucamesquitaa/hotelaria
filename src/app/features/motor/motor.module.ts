import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { MotorRoutingModule } from './motor-routing.module';
import { MotorComponent } from './motor.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbDatepicker, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrNgbDateParserFormatter } from './br-ngb-date-parser-formatter';


@NgModule({
  declarations: [MotorComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbDatepicker, 
     JsonPipe,
    MotorRoutingModule,
  ],
  providers: [
    { provide: NgbDateParserFormatter, useClass: BrNgbDateParserFormatter }
  ]
})
export class MotorModule { }
