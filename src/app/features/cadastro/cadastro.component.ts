import { CommonModule } from '@angular/common';
import { Component, Inject, Injector, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { CadastroService } from 'src/app/shared/services/cadastro.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
      CommonModule,
      SharedModule,
    ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent extends ComponentBase{

  formGroup: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    passConfirm: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
  });

  /**
   *
   */
  constructor(public override injector: Injector,
              private toastr: ToastrService,
              private cadastroService: CadastroService) {
    super(injector);
  }

  cadastroSubmit(formGroup: FormGroup): void {
    if(formGroup.value.password != formGroup.value.passConfirm){
      this.toastr.error("As senhas não são iguais.");
      return;
    }
    this.cadastroService.doCadastro(formGroup.value).subscribe({
        next: (retorno) => {
          this.toastr.success(retorno);
        },
        complete: () => {
          this.router.navigate(['home']);
        }
    });
  }
}
