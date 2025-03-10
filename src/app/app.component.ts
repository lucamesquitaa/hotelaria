import { Component, Injector, OnInit } from '@angular/core';
import { ComponentBase } from './shared/components/component.base';
import { LoginService } from './shared/services/login.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule,
        NgbNavModule,
        FormsModule,
        RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends ComponentBase implements OnInit{
  menusVisivel: boolean = true;
  constructor(public override injector: Injector,
              public loginService: LoginService
  ){
    super(injector);
  }


  override ngOnInit(){
  }

  logOut(){
    this.loginService.logout();
    this.context.usuarioAutenticado = false;
    this.router.navigate(['login']);
  }
}

