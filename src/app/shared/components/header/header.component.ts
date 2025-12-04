import { Component, Injector } from '@angular/core';
import { ComponentBase } from '../component.base';
import { OAuthService } from 'angular-oauth2-oidc';
import { MenubarService } from '../../services/menubar.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends ComponentBase{
  public appTitle: string = 'Painel da Administração';
  public currentDate: Date = new Date();
    constructor(
        public override injector: Injector, 
        private oauthService: OAuthService
    ) {
        super(injector);
    }

  logout() {
    // Limpa todos os cookies
    this.cookieService.deleteAll();
    // Limpa os tokens do OAuth
    this.oauthService.logOut();
    // Navega para login e força um novo fluxo de autenticação
    this.router.navigate(["/login"]).then(() => {
      this.oauthService.initLoginFlow();
    });
  }
}
