import { Component } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component.base';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends ComponentBase {
  override onReceiveLiterals(): void {
  }
  onLogin(){
    this.router.navigate(['/home']);
  }
}
