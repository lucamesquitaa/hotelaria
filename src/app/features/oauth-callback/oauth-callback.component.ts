import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/oauth.service';

@Component({
  selector: 'app-oauth-callback',
  standalone: true,
  template: '<div>Processando login...</div>'
})
export class OAuthCallbackComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Verifica se o usuário foi autenticado após callback
    if (this.authService.isAuthenticated()) {
      // Obtém URL de retorno armazenada
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
      this.router.navigate([returnUrl]);
    } else {
      // Se não conseguiu autenticar, volta para login
      this.router.navigate(['/login']);
    }
  }
}