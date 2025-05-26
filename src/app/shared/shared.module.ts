import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgbTypeaheadModule],
  exports: [
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgbTypeaheadModule],
})
export class SharedModule { }
