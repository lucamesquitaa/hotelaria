import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class SessionInterceptor implements HttpInterceptor {

  /**
   *
   */
  constructor(private loginService: LoginService) {

  }
  /**
   * Seta o token de acesso no cabeçalho da requisição
   */
  private setTokenHeader(request: HttpRequest<any>, access_token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${access_token}`
      }
    });
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // Evita colocar a autenticação para API de refresh token, recuperação de senha e troca de senha
    if (!req.url.includes('Users/Cadastro') &&
        !req.url.includes('Login') ) {

      // Se a requisição não tiver o header "Authorization"
      if (!req.headers.has('Authorization')) {

        const access_token = SessionInterceptor.getAccessToken();
        if(access_token)
          this.loginService.setTokenContext(access_token);

        // Insere o cabeçalho de autorização na requisição HTTP
        req = this.setTokenHeader(req, <string>access_token);
      }
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401) {
          this.loginService.logout();
        }

        return throwError(() => error.error);
      })
    );
  }

  public static getAccessToken(): string | null{
    let access_token = sessionStorage.getItem('access_token');

    return access_token;
  }
}
