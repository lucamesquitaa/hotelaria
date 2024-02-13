import { Component, Injector } from '@angular/core';
import { PoPageLoginLiterals } from '@po-ui/ng-templates';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { User } from 'src/app/shared/models/login.model';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends ComponentBase {
  customLiterals: PoPageLoginLiterals = {
    loginHint: '',
    rememberUserHint: '',
    rememberUser: 'Lembrar usuário',
  };
  override onReceiveLiterals(): void {
  }
  constructor(public override injector: Injector, public loginService: LoginService){
    super(injector);
  }
  onLoginSubmit(event: any){
    let user: User = {
      username: event.login,
      password: event.password
    }
    this.loginService.doLogin(user);
    this.router.navigate(['/home']);
  }
  onLogoutSubmit(){
    this.loginService.doLogout();
    this.router.navigate(['/login']);
  }
}
