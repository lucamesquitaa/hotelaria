import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Injector } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { LoginModel } from 'src/app/shared/models/login.model';
import { LoginService } from 'src/app/shared/services/login.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends ComponentBase implements AfterViewInit {

  formGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
  });

  override onReceiveLiterals(): void {
  }
  constructor(public override injector: Injector, public loginService: LoginService){
    super(injector);
  }

  ngAfterViewInit(): void {
  }

  onLoginSubmit(formGroup: FormGroup): void {
    this.loginService.doLogin(formGroup.value).subscribe({
      next: (result) => {
        sessionStorage.setItem('access_token', result.token);
        this.router.navigate(['/home']);
      },error : (error) => {
        console.log(error);
      }
  });
  }
  onLogoutSubmit(){
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
