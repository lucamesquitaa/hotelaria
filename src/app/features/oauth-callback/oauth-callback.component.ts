import { Component, OnInit, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/oauth.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { ResultLoginModel } from 'src/app/shared/models/login.model';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-oauth-callback',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="callback-container">
      <div class="spinner" *ngIf="isProcessing">
        <div class="loading-text">Processando login...</div>
      </div>
      <div class="error-message" *ngIf="errorMessage">
        <p>{{errorMessage}}</p>
        <button (click)="redirectToLogin()" class="btn btn-primary">Voltar ao Login</button>
      </div>
    </div>
  `,
  styles: [`
    .callback-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    .loading-text {
      text-align: center;
      font-size: 18px;
    }
    .error-message {
      text-align: center;
    }
    .btn {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class OAuthCallbackComponent implements OnInit {
  isProcessing = true;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    console.log('=== OAUTH CALLBACK COMPONENT LOADED ===');
    console.log('Current URL:', window.location.href);
    console.log('Search params:', window.location.search);
    console.log('Hash:', window.location.hash);
    
    this.processOAuthCallback();
  }

  private processOAuthCallback(): void {
    console.log('=== OAUTH CALLBACK ===');
    
    // Tenta processar os parâmetros de callback do OAuth
    this.authService['oauthService'].loadDiscoveryDocumentAndTryLogin().then(() => {
      console.log('Discovery document loaded and login attempted');
      
      // Aguarda um pouco para o processamento do token
      setTimeout(() => {
        // Verifica se o usuário foi autenticado após callback
        if (this.authService.isAuthenticated()) {
          console.log('✓ OAuth authentication successful');
          this.callDoLogin();
        } else {
          console.log('✗ OAuth authentication failed');
          console.log('Has valid access token:', this.authService['oauthService'].hasValidAccessToken());
          console.log('Access token:', this.authService['oauthService'].getAccessToken());
          console.log('Identity claims:', this.authService['oauthService'].getIdentityClaims());
          
          this.errorMessage = 'Falha na autenticação com Google. Tente novamente.';
          this.isProcessing = false;
        }
      }, 1000);
    }).catch(error => {
      console.error('Error loading discovery document:', error);
      this.errorMessage = 'Erro na configuração de autenticação. Tente novamente.';
      this.isProcessing = false;
    });
  }

  private callDoLogin(): void {
    console.log('=== CALLING DO LOGIN ===');
    
    try {
      // Obtém dados do usuário do Google OAuth
      const userInfo = this.authService.getUserInfo();
      const userEmail = this.authService.getUserEmail();
      const userName = this.authService.getUserName();
      const userPicture = this.authService.getUserPicture();

      console.log('Google user info:', userInfo);

      if (!userEmail || !userName) {
        throw new Error('Dados do usuário do Google incompletos');
      }

      // Mapeia para o formato esperado pelo doLogin
      const nameParts = userName.split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      const loginData: ResultLoginModel = {
        Id: userInfo?.sub || userEmail, // Usa o sub do Google como ID, ou email como fallback
        Email: userEmail,
        FirstName: firstName,
        LastName: lastName,
        Photo: userPicture || ''
      };

      console.log('Calling doLogin with data:', loginData);

      // Chama o doLogin do backend
      this.loginService.doLogin(loginData).subscribe({
        next: (response) => {
          console.log('✓ DoLogin successful:', response);
          
          // Armazena o token do backend se fornecido
          if (response.token) {
            this.cookieService.set('access_token', response.token, { 
              expires: 7, // 7 dias
              path: '/',
              secure: window.location.protocol === 'https:'
            });
            console.log('✓ Backend token stored');
          }

          // Redireciona para a URL apropriada
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
          console.log(`✓ Redirecting to: ${returnUrl}`);
          this.router.navigate([returnUrl]);
        },
        error: (error) => {
          console.error('✗ DoLogin failed:', error);
          this.errorMessage = 'Erro ao processar login no servidor. Tente novamente.';
          this.isProcessing = false;
        }
      });

    } catch (error) {
      console.error('✗ Error processing user data:', error);
      this.errorMessage = 'Erro ao obter dados do usuário. Tente novamente.';
      this.isProcessing = false;
    }
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }
}