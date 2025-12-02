import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamposComponent } from './campos.component';
import { CategoryCampoComponent } from 'src/app/shared/components/category-campo/category-campo.component';

const routes: Routes = [
  {
    path: '',
    component: CamposComponent,
    children: [
      {path: '', component: CategoryCampoComponent, },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CamposRoutingModule { }
