import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotorComponent } from './motor.component';
import { ContextoComponent } from './contexto/contexto.component';

const routes: Routes = [
  { path: '', component: ContextoComponent } ,// Replace null with MotorComponent when standalone components are supported in routing
  { path: ':hotelId', component: MotorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotorRoutingModule { }
