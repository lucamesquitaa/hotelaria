import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(
    private oauthService: OAuthService,
    private router: Router
  ) {
    // Inicializa o estado de autenticação
    this.isAuthenticatedSubject.next(this.oauthService.hasValidAccessToken());
    
    // Escuta mudanças no token
    this.oauthService.events.subscribe(event => {
      if (event.type === 'token_received' || event.type === 'token_refreshed') {
        this.isAuthenticatedSubject.next(true);
      } else if (event.type === 'logout' || event.type === 'session_terminated') {
        this.isAuthenticatedSubject.next(false);
      }
    });
  }

  /**
   * Inicia o processo de login OAuth2 com Google
   */
  public login(): void {
    this.oauthService.initCodeFlow();
  }

  /**
   * Realiza logout
   */
  public logout(): void {
    this.oauthService.revokeTokenAndLogout();
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  /**
   * Verifica se o usuário está autenticado
   */
  public isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  /**
   * Obtém as informações do usuário do token
   */
  public getUserInfo(): any {
    const claims = this.oauthService.getIdentityClaims();
    return claims;
  }

  /**
   * Obtém o nome do usuário
   */
  public getUserName(): string {
    const claims = this.oauthService.getIdentityClaims() as any;
    return claims?.name || '';
  }

  /**
   * Obtém o email do usuário
   */
  public getUserEmail(): string {
    const claims = this.oauthService.getIdentityClaims() as any;
    return claims?.email || '';
  }

  /**
   * Obtém a foto do usuário
   */
  public getUserPicture(): string {
    const claims = this.oauthService.getIdentityClaims() as any;
    return claims?.picture || '';
  }

  /**
   * Obtém o token de acesso
   */
  public getAccessToken(): string {
    return this.oauthService.getAccessToken();
  }

  /**
   * Refresh do token
   */
  public refreshToken(): Promise<boolean> {
    return this.oauthService.refreshToken().then(() => true).catch(() => false);
  }
}