import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Injector } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { LoginModel } from 'src/app/shared/models/login.model';
import { LoginService } from 'src/app/shared/services/login.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends ComponentBase implements AfterViewInit {

  formGroup: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
  });

  constructor(public override injector: Injector,
    public loginService: LoginService,
    ){
    super(injector);
  }

  ngAfterViewInit(): void {
  }

  async onLoginSubmit(formGroup: FormGroup) {

    this.loginService.doLogin(formGroup.value).subscribe({
      next: (result) => {
        this.cookieService.set('access_token',  result.token, { expires: 7, path: '/' });
      },
      error : (error) => {
        this.toastr.error("Erro ao realizar autenticação.");
    },
      complete: () => {
        this.router.navigate(['admin']);
      }
    });
  }
}
