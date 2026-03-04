import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, effect, Injector, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OAuthService } from 'angular-oauth2-oidc';
import { ToastrService } from 'ngx-toastr';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { LoginModel, ResultLoginModel } from 'src/app/shared/models/login.model';
import { LoginService } from 'src/app/shared/services/login.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { authConfig } from 'src/auth.config';

declare const google: any;

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends ComponentBase implements OnInit {

isLoggedIn = false;
  profile: any;
  constructor(public override injector: Injector, 
              private loginService: LoginService,
                private oauthService: OAuthService) {
    super(injector);
  }

  

  override ngOnInit() {
    this.initializeGoogleSignIn();
  }

  private initializeGoogleSignIn(): void {
    if (typeof google !== 'undefined' && google.accounts) {
      this.setupGoogleSignIn();
    } else {
      // Wait for Google script to load
      setTimeout(() => {
        this.initializeGoogleSignIn();
      }, 100);
    }
  }

  private setupGoogleSignIn(): void {
    google.accounts.id.initialize({
      client_id: '838656343224-8cr24hdeobtu00kevkhj27sudbuq8g97.apps.googleusercontent.com',
      callback: (response: any) => {
        this.handleGoogleLogin(response);
      }
    });

    google.accounts.id.renderButton(
      document.getElementById("googleBtn"),
      { theme: "outline", size: "large" }
    );

    google.accounts.id.prompt();
  }

handleGoogleLogin(response: any) {
  const idToken = response.credential;

  this.loginService.doLogin(idToken)
    .subscribe({
      next: (result) => {
        this.cookieService.set("access_token", result.token);
        this.router.navigate(["/admin"]);
      },
      error: (err) => {
        this.toastr.error("Erro ao autenticar com Google.");
      }
    });
}

  logout() {
    this.oauthService.logOut();
    sessionStorage.clear();
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('nonce');
      localStorage.removeItem('PKCE_verifier');
      this.cookieService.deleteAll();
  }
}
