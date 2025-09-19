import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuartosComponent } from './quartos.component';

const routes: Routes = [
  { path: '', component: QuartosComponent },
  { path: ':hotelId', component: QuartosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuartosRoutingModule { }
