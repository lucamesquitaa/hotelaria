import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuartosComponent } from './quartos.component';
import { CadastroQuartoComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroQuartoComponent },
  { path: 'cadastro/:quartoId', component: CadastroQuartoComponent },
  { path: ':hotelId', component: QuartosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuartosRoutingModule { }
