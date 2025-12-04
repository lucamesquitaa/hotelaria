import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuartosRoutingModule } from './quartos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuartosComponent } from './quartos.component';
import { CadastroQuartoComponent } from './cadastro/cadastro.component';


@NgModule({
  declarations: [
    QuartosComponent,
    CadastroQuartoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    QuartosRoutingModule
  ]
})
export class QuartosModule { }
