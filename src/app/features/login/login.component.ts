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
    this.oauthService.configure(authConfig);
  }

  override ngOnInit() {
    console.log('=== LOGIN COMPONENT INIT ===');
    // Carrega o documento de descoberta e tenta processar a resposta do OAuth
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      console.log('Discovery document loaded');
      console.log('Has valid ID token:', this.oauthService.hasValidIdToken());
      console.log('Has valid access token:', this.oauthService.hasValidAccessToken());
      this.processOAuthResponse();
    }).catch(error => {
      console.error('Error loading discovery document:', error);
    });
  }

  private processOAuthResponse() {
    console.log('=== PROCESSING OAUTH RESPONSE ===');
    console.log('Is logged in:', this.isLoggedIn);
    
    if (this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken()) {
      console.log('✓ Valid tokens found');
      this.isLoggedIn = true;
      this.profile = this.oauthService.getIdentityClaims();
      console.log('Profile from OAuth:', this.profile);
      
      const user: ResultLoginModel = {
        Id: this.profile.sub,
        Email: this.profile.email,
        FirstName: this.profile.given_name,
        LastName: this.profile.family_name,
        Photo: this.profile.picture
      };
      
      console.log('User model created:', user);
      
      this.context.perfil = user;
      console.log('Calling login service...');
      
      this.loginService.doLogin(user).subscribe({
        next: (result) => {
          console.log('✓ Login service response:', result);
          this.cookieService.set("access_token", result.token);
          this.cookieService.set("user_id", user.Id);
          this.cookieService.set("user_email", user.Email);
          this.cookieService.set("user_first_name", user.FirstName);
          this.cookieService.set("user_last_name", user.LastName);
          this.cookieService.set("user_photo", user.Photo);
          console.log('✓ Cookies set successfully');
        },
        error: (error) => {
          console.error('✗ Login service error:', error);
          console.error('Error details:', error.error);
          this.toastr.error(error.error?.mensagem || error.error?.excecaoMensagem || "Erro no servidor.");
        },
        complete: () => {
          console.log('✓ Login complete, redirecting to admin...');
          this.router.navigate(["/admin"]);
        }
      });
    } else {
      console.log('✗ No valid tokens found');
      console.log('ID Token valid:', this.oauthService.hasValidIdToken());
      console.log('Access Token valid:', this.oauthService.hasValidAccessToken());
    }
  }
 login() {
    console.log('=== LOGIN BUTTON CLICKED ===');
    console.log('Currently logged in:', this.isLoggedIn);
    
    // Se já está logado, vai direto para admin
    if (this.isLoggedIn) {
      console.log('Already logged in, navigating to admin');
      this.router.navigate(["/admin"]);
    } else {
      // Inicia o fluxo de login
      console.log('Starting OAuth login flow...');
      this.oauthService.initLoginFlow();
    }
  }

  forceLogin() {
    console.log('=== FORCE LOGIN CLICKED ===');
    // Limpa os tokens existentes e força um novo login
    this.oauthService.logOut();
    console.log('Logged out, initiating new login flow...');
    this.oauthService.initLoginFlow();
  }

  logout() {
    this.oauthService.logOut();
  }
}
