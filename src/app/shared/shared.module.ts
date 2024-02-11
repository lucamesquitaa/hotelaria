import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//componentes PO-UI
import { PoButtonModule } from '@po-ui/ng-components';
import { PoWidgetModule } from '@po-ui/ng-components';
import { PoPageLoginModule } from '@po-ui/ng-templates';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule, PoButtonModule, PoWidgetModule, PoPageLoginModule],
  declarations: [],
  exports: [HttpClientModule, RouterModule, PoButtonModule, PoWidgetModule, PoPageLoginModule],
})
export class SharedModule { }
