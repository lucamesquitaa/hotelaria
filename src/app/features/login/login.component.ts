import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { AuthService } from 'src/app/shared/services/oauth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends ComponentBase implements OnInit {
  returnUrl: string = '';

  constructor(
    public override injector: Injector, 
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    super(injector);
  }

  override ngOnInit() {
    // Verifica se já está logado
    if (this.authService.isAuthenticated()) {
      console.log('User already authenticated, redirecting to dashboard');
      this.router.navigate(['/dashboard']);
      return;
    }

    // Obtém returnUrl dos query params
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  /**
   * Inicia o processo de login OAuth2 com Google
   */
  loginWithGoogle(): void {
    this.authService.login();
  }

  /**
   * Verifica se o usuário está autenticado
   */
  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  logout() {
    console.log('Logging out user');
    // Limpa tokens do OAuth
    this.authService.logout();
    
    // Limpa storage local
    sessionStorage.clear();
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('nonce');
    localStorage.removeItem('PKCE_verifier');
    this.cookieService.deleteAll();
    
    // Redireciona para login
    this.router.navigate(['/login']);
  }
}
