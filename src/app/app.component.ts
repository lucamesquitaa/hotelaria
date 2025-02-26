import { Component, Injector, OnInit } from '@angular/core';
import { ComponentBase } from './shared/components/component.base';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends ComponentBase implements OnInit{

  constructor(public override injector: Injector,
              public loginService: LoginService
  ){
    super(injector);
  }

  override onReceiveLiterals(): void {
  }

  override ngOnInit(){
  }

  logOut(){
    LoginService.doLogout();
    this.context.usuarioAutenticado = false;
    this.router.navigate(['/login']);
  }
}

