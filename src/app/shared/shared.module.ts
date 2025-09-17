import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { MenubarComponent } from './components/menubar/menubar.component';


@NgModule({
      declarations: [
            MenubarComponent
      ],
  imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        NgbModule,
        NgbTypeaheadModule,
        ],
  exports: [
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgbTypeaheadModule,
        MenubarComponent],
})
export class SharedModule { }
