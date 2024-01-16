import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//componentes PRIMENG
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { DataViewModule } from 'primeng/dataview';



@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule, ToolbarModule, ButtonModule, InputTextModule, AvatarModule, AvatarGroupModule, BadgeModule, DataViewModule],
  declarations: [],
  exports: [HttpClientModule, RouterModule, ToolbarModule, ButtonModule, InputTextModule, AvatarModule, AvatarGroupModule, BadgeModule, DataViewModule],
})
export class SharedModule {}
