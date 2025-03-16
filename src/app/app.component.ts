import { Component, Injector, OnInit } from '@angular/core';
import { ComponentBase } from './shared/components/component.base';
import { LoginService } from './shared/services/login.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbConfig, NgbDropdown, NgbDropdownModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule,
        NgbNavModule,
        FormsModule,
        RouterModule,
        NgbDropdownModule,
  ],
  providers: [
    NgbDropdown],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends ComponentBase implements OnInit{
  menusVisivel: boolean = true;
  textSaudacao = "Olá";
  constructor(public override injector: Injector,
              public loginService: LoginService,
              ngbConfig: NgbConfig
  ){
    super(injector);
    ngbConfig.animation = false;
  }


  override ngOnInit(){
    this.context.usuario.username = sessionStorage.getItem('user_name') ?? '';
    let token = sessionStorage.getItem('access_token');
    if(token)
      this.context.token = token;


    const now = new Date();
    const formatter = new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit' });
    let hora = formatter.format(now.getTime());
    let formatHora = Number(hora.split(':')[0]);
    if (formatHora >= 5 && formatHora < 12) {
      this.textSaudacao = "Bom dia"; // 'Manhã';
    } else if (formatHora >= 12 && formatHora < 18) {
      this.textSaudacao = "Boa tarde";//return 'Tarde';
    } else {
      this.textSaudacao = "Boa noite";//return 'Noite';
    }
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['login']).then(() => {
      window.location.reload();
    });

  }
}

