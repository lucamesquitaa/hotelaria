import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes MATERIAL
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [CommonModule, HttpClientModule, MatInputModule, MatButtonModule, MatIconModule, RouterModule, MatToolbarModule, MatMenuModule],
  declarations: [],
  exports: [MatInputModule, HttpClientModule, MatButtonModule, MatIconModule, RouterModule, MatToolbarModule, MatMenuModule],
})
export class SharedModule {}
