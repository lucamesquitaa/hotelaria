import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes MATERIAL
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatInputModule, MatButtonModule, MatIconModule],
  declarations: [],
  exports: [MatInputModule, MatButtonModule, MatIconModule],
})
export class SharedModule {}
