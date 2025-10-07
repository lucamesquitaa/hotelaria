import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafeteriaComponent } from './cafeteria.component';
import { InicioComponent } from './inicio/inicio.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { MissoesComponent } from './missoes/missoes.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';

const routes: Routes = [
  {
    path: '',
    component: CafeteriaComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'cardapio',
        component: CardapioComponent
      },
      {
        path: 'missoes',
        component: MissoesComponent
      },
      {
        path: 'beneficios',
        component: BeneficiosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeteriaRoutingModule { }
