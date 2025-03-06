import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//componentes Bootstrap





@NgModule({
  imports: [ FormsModule, ReactiveFormsModule,HttpClientModule, RouterModule],
  exports: [ FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule],
})
export class SharedModule { }
