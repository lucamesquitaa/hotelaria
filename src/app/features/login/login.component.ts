import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, effect, Injector, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OAuthService } from 'angular-oauth2-oidc';
import { ToastrService } from 'ngx-toastr';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { LoginModel, ResultLoginModel } from 'src/app/shared/models/login.model';
import { LoginService } from 'src/app/shared/services/login.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { authConfig } from 'src/auth.config';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends ComponentBase {

isLoggedIn = false;
  profile: any;
  constructor(public override injector: Injector, 
              private loginService: LoginService,
                private oauthService: OAuthService) {
    super(injector);
 this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken()) {
        this.isLoggedIn = true;
        this.profile = this.oauthService.getIdentityClaims();
        console.log(this.profile);
        var user: ResultLoginModel = {
          Id: this.profile.sub,
          Email: this.profile.email,
          FirstName: this.profile.given_name,
          LastName: this.profile.family_name,
          Photo: this.profile.picture
        };

        this.loginService.doLogin(user).subscribe({
          next: (result) => {
            this.cookieService.set("access_token", result.token);
            this.router.navigate(["/admin"]);
          },
          error: (error) => {
            this.toastr.error("Erro no login.");
          }
        });
      }
    });

  }
 login() {
    this.oauthService.initLoginFlow();
  }

  logout() {
    this.oauthService.logOut();
  }
}
