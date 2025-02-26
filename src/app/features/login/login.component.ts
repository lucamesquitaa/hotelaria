import { AfterViewInit, Component, Injector } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends ComponentBase implements AfterViewInit {
  override onReceiveLiterals(): void {
  }
  constructor(public override injector: Injector, public loginService: LoginService){
    super(injector);
  }

  ngAfterViewInit(): void {
    this.context.usuarioAutenticado = false;
  }

  onLoginSubmit(event: any){
    let user: any = {
      username: event.login,
      password: event.password
    }
    this.loginService.doLogin(user).subscribe({
      next: (result) => {
        localStorage.setItem('token', result.token);
        this.context.usuarioAutenticado = true;

        if(user.username == "admin")
          this.context.usuario.admin = true;

        this.router.navigate(['/admin']);
      },error : (error) => {
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
