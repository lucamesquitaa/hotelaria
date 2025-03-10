import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../shared.module';
import { ComponentBase } from '../component.base';
import { ToastrService } from 'ngx-toastr';
import { MetaService } from '../../services/meta.service';
import { BodyService } from '../../services/body.service';

@Component({
  selector: 'app-newbody',
  imports: [CommonModule,
          SharedModule,],
  templateUrl: './newbody.component.html',
  styleUrl: './newbody.component.scss'
})
export class NewbodyComponent extends ComponentBase {
  @Output('subbimit')
  subbimit = new EventEmitter();

  @Input('content')
  content!: any;

  userId!: string | null;

  formGroup: FormGroup = new FormGroup({
      userId: new FormControl('', [Validators.required]),
      altura: new FormControl('', [Validators.required]),
      peso: new FormControl('', [Validators.required]),
    });

    /**
     *
     */
    constructor(public override injector: Injector,
                 private toastr: ToastrService,
                 private bodyService: BodyService) {
       super(injector);

     }

    override ngOnInit(): void {
      this.userId = sessionStorage.getItem("user_id");
    }

    bodySubmit(formGroup: FormGroup): void {
      formGroup.value.userId = this.userId;
      Number(formGroup.value.altura.toString().replaceAll(',', '.'));
      Number(formGroup.value.peso.toString().replaceAll(',', '.'));

      this.bodyService.doCadastraBody(formGroup.value).subscribe({
        next: (result) =>{
          this.toastr.success("Cadastrado com sucesso!");
          //this.subbitmid.emit();
          this.formGroup= new FormGroup({
            userId: new FormControl('', [Validators.required]),
            altura: new FormControl('', [Validators.required]),
            peso: new FormControl('', [Validators.required]),
          });
        },
        error : (error) => {
            this.toastr.error(error);
        },
        complete: () => {
          this.subbimit.emit();
        }
      });
    }
}
