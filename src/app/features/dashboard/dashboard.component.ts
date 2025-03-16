import { CommonModule } from '@angular/common';
import { Component, inject, Injector, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NgbDropdownModule, NgbModal, NgbModalConfig, NgbModalModule, NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';
import { Color, LegendPosition, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { ToastrService } from 'ngx-toastr';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { NewmetaComponent } from 'src/app/shared/components/newmeta/newmeta.component';
import { EstadoMetaModel, ItensMetaModel } from 'src/app/shared/models/meta.model';
import { LoginService } from 'src/app/shared/services/login.service';
import { MetaService } from 'src/app/shared/services/meta.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, SharedModule, NgbModalModule, NewmetaComponent, NgbDropdownModule, NgbOffcanvasModule],
  providers: [NgbModalConfig, NgbModal],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent extends ComponentBase{

  itens !: ItensMetaModel[];

  private modalService = inject(NgbModal);

  /**
   *
   */
  constructor(public override injector: Injector,
              private toastr: ToastrService,
              private metaService: MetaService,
              config: NgbModalConfig,) {
    super(injector);
      // customize default values of modals used by this component tree
      config.backdrop = 'static';
      config.keyboard = false;
    }

    open(content: any) {
      this.modalService.open(content);
    }

  override ngOnInit(): void {
    let token = sessionStorage.getItem('access_token');
    if(token)
      this.context.token = token;

    this.getMetas();
  }

  onSwitchChange(id: any){
    this.metaService.doPatchMeta(id).subscribe({
      next: (res) => {
        this.toastr.success("Meta atualizada com sucesso!");
      },
      error: (er) => {
        this.toastr.error(er.error);
      },
      complete: () => {
        this.getMetas();
      }
    });
  }

  getMetas(){
    let userId = sessionStorage.getItem("user_id")!;

    this.metaService.doGetMetas(userId).subscribe({
      next : (result) => {
        this.itens = result;
      },
      error: (err) => {
        console.log(err);
        if(err.status == 401){
          sessionStorage.clear();
          this.router.navigateByUrl('/');
        }
      },
      complete: () => {
      }
    });
  }

  deleteMeta(id?: string){
    console.log(id);
    if(id){
      this.metaService.doDeleteMeta(id).subscribe({
        next: (res) => {
          this.toastr.success("Meta excluída com sucesso!");
        },
        error: (err) =>{
          this.toastr.error(err);

        },
        complete: () => {
          this.getMetas();
        }
    });
    }
  }
  itemCategoryString(category?: number) : string{
    switch(category){
      case 1: return "Alimentação";
      case 2: return "Atividade física";
      case 3: return "Outros";
      default: return "";
    }
  }
  saveModal() {
    this.modalService.dismissAll();
    this.getMetas();
  }
}
