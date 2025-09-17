import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersRoutingModule } from './managers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManagersComponent } from './managers.component';


@NgModule({
  declarations: [ManagersComponent],
  imports: [
    CommonModule,
    SharedModule,
    ManagersRoutingModule,
  ]
})
export class ManagersModule { }
