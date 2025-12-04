import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MenubarComponent } from './components/menubar/menubar.component';
import { SelectRemoteComponent } from './components/select-remote/select-remote.component';
import { CategoryCampoComponent } from './components/category-campo/category-campo.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
      declarations: [
            MenubarComponent,
            CategoryCampoComponent,
            HeaderComponent
      ],
  imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        NgbModule,
        NgbTypeaheadModule,
        HttpClientModule,
        SelectRemoteComponent
        ],
  exports: [
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgbTypeaheadModule,
        HttpClientModule,
        MenubarComponent,
        SelectRemoteComponent,
        CategoryCampoComponent,
        HeaderComponent
        ]
})
export class SharedModule { }
