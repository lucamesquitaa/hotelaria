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

  override async ngOnInit() {
    console.log('=== LOGIN COMPONENT INIT ===');
    
    // Verifica se está retornando de um fluxo de login OAuth (callback)
    const hasAuthCode = window.location.href.includes('code=') || window.location.href.includes('id_token=');
    
    if (!hasAuthCode) {
      // Se não está retornando de callback, limpa qualquer sessão existente
      console.log('No OAuth callback detected, clearing any existing sessions...');
      this.oauthService.logOut(true); // true = não redireciona
      sessionStorage.clear();
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('nonce');
      localStorage.removeItem('PKCE_verifier');
    }
    const result = await this.oauthService.tryLoginCodeFlow();
    // Carrega apenas o documento de descoberta
    this.oauthService.loadDiscoveryDocument().then(() => {
      console.log('Discovery document loaded');
      
      if (hasAuthCode) {
        console.log('Detected OAuth callback, processing tokens...');
        // Se está retornando do OAuth, processa os tokens
        this.oauthService.tryLogin().then(() => {
          if (this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken()) {
            this.processOAuthResponse();
          }
        });
      } else {
        console.log('Waiting for user to click login button');
      }
    }).catch(error => {
      console.error('Error loading discovery document:', error);
    });
  }

  private processOAuthResponse() {
    console.log('=== PROCESSING OAUTH RESPONSE ===');
    
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
    console.log('Initiating login flow...');
    // Força a escolha de conta no Google (prompt=select_account)
    this.oauthService.initLoginFlow('', { prompt: 'select_account' });
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
