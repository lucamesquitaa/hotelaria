import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotorComponent } from './motor.component';

const routes: Routes = [
  { path: '', component: MotorComponent } // Replace null with MotorComponent when standalone components are supported in routing
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotorRoutingModule { }
