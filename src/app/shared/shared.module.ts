import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//componentes Bootstrap





@NgModule({
  imports: [CommonModule,ReactiveFormsModule, FormsModule, HttpClientModule, RouterModule],
  declarations: [
    CardComponent,
  ],
  exports: [ReactiveFormsModule,FormsModule, HttpClientModule, RouterModule,
    //componentes bootstrap
    //...

   ],
})
export class SharedModule { }
