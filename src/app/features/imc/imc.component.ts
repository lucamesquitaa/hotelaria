import { Component, inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewbodyComponent } from "../../shared/components/newbody/newbody.component";
import { ComponentBase } from 'src/app/shared/components/component.base';
import { BodyService } from 'src/app/shared/services/body.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ItensBodyModel } from 'src/app/shared/models/body.model';

@Component({
  selector: 'app-imc',
  imports: [CommonModule, SharedModule, NewbodyComponent],
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.scss'
})
export class IMCComponent extends ComponentBase {
  body!: ItensBodyModel[];

  private modalService = inject(NgbModal);
  /**
   *
   */
  constructor( private bodyService: BodyService,
                public override injector: Injector,
                        private toastr: ToastrService,
                        config: NgbModalConfig,
  ) {
    super(injector);

  }

  override ngOnInit(): void {
    let token = sessionStorage.getItem('access_token');
    if(token)
      this.context.token = token;

    this.getIMCs();
  }

  open(content: any) {
    this.modalService.open(content);
  }
  getIMCs(){
    let userId = sessionStorage.getItem("user_id")!;

    this.bodyService.doGetBodys(userId).subscribe({
      next : (result) => {
        this.body = result;
      },
      error: (err) => {
        if(err.status == 401){
          sessionStorage.clear();
          this.router.navigateByUrl('/');
        }
      }
    });
  }
}
