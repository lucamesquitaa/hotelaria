import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';


//componentes PO-UI
import { PoButtonModule, PoToolbarModule } from '@po-ui/ng-components';
import { PoWidgetModule } from '@po-ui/ng-components';
import { PoPageLoginModule } from '@po-ui/ng-templates';
import { PoTabsModule } from '@po-ui/ng-components';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PoFieldModule } from '@po-ui/ng-components';
import { PoPageModule } from '@po-ui/ng-components';


@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule, PoButtonModule, PoWidgetModule, PoPageLoginModule, PoTabsModule, PoToolbarModule, PoPageModule, PoFieldModule],
  declarations: [
    ToolbarComponent,
    CardComponent
  ],
  exports: [HttpClientModule, RouterModule, PoButtonModule, PoWidgetModule, PoPageLoginModule, PoTabsModule, ToolbarComponent, CardComponent, PoToolbarModule, PoPageModule, PoFieldModule],
})
export class SharedModule { }
