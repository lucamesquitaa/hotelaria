import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { ComponentBase } from '../component.base';
import { ItensMetaModel } from '../../models/meta.model';
import { MetaService } from '../../services/meta.service';
import { FormGroup, FormControl, Validators, NgSelectOption } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { ToastrService } from 'ngx-toastr';
import { window } from 'rxjs';

@Component({
  selector: 'app-newmeta',
  imports: [CommonModule,
        SharedModule],
  templateUrl: './newmeta.component.html',
  styleUrl: './newmeta.component.scss'
})
export class NewmetaComponent extends ComponentBase{
  @Output('subbimit')
  subbimit = new EventEmitter();

  @Input('maisDe5Metas')
  maisDe5Metas!: boolean;

  itens!: ItensMetaModel[];

  userId!: string | null;

  formGroup: FormGroup = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    description: new FormControl('', [Validators.maxLength(30)]),
  });
  /**
   *ng
   */
  constructor(public override injector: Injector,
              private toastr: ToastrService,
              private metasService: MetaService) {
    super(injector);

  }

  override ngOnInit(): void {
    this.userId = sessionStorage.getItem("user_id");
  }

  metaSubmit(formGroup: FormGroup): void {
    if(this.maisDe5Metas){
      this.toastr.warning("Só pode criar 5 metas (Demo v1)")
    }


    formGroup.value.userId = this.userId;

    this.metasService.doCadastraMeta(formGroup.value).subscribe({
      next: (result) =>{
        this.toastr.success("Meta criada com sucesso!");

        this.formGroup = new FormGroup({
          userId: new FormControl('', [Validators.required]),
          title: new FormControl('', [Validators.required, Validators.maxLength(20)]),
          description: new FormControl('', [Validators.maxLength(30)]),
        });
      },
      error : (error) => {
          this.toastr.error(error);
      },
      complete: () => {
        this.subbimit.emit()
      }
    });
  }
}
