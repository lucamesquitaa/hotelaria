import { AfterViewInit, Component, Injector } from '@angular/core';
import { PoPageLoginLiterals } from '@po-ui/ng-templates';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { User } from 'src/app/shared/models/login.model';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends ComponentBase implements AfterViewInit {
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

  ngAfterViewInit(): void {
    this.context.usuarioAutenticado = false;
  }

  onLoginSubmit(event: any){
    let user: User = {
      username: event.login,
      password: event.password
    }
    this.loginService.doLogin(user).subscribe({
      next: (result) => {
        localStorage.setItem('token', result.token);
        localStorage.setItem('usuarioAutenticado', "true");
        this.context.usuarioAutenticado = true;
        this.router.navigate(['/home']);
      },error : (error) => {
        localStorage.setItem('usuarioAutenticado', "false");
        this.context.usuarioAutenticado = false;
        console.log(error);
      }
  });
  }
  onLogoutSubmit(){
    LoginService.doLogout();
    this.context.usuarioAutenticado = false;
    this.router.navigate(['/login']);
  }
}
