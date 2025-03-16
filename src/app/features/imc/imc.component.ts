import { Component, inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewbodyComponent } from "../../shared/components/newbody/newbody.component";
import { ComponentBase } from 'src/app/shared/components/component.base';
import { BodyService } from 'src/app/shared/services/body.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ItensBodyModel } from 'src/app/shared/models/body.model';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ImcCharts, SeriesIMC } from 'src/app/shared/models/imcs.charts';

@Component({
  selector: 'app-imc',
  imports: [CommonModule, SharedModule, NewbodyComponent, NgxChartsModule],
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.scss'
})
export class IMCComponent extends ComponentBase {
  body!: ItensBodyModel[];
  single!: any[];;

  view:  [number, number] = [600, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Data';
  showYAxisLabel = true;
  yAxisLabel = 'IMC';


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
    Object.assign(this, { single: this.single })
  }

  captureScreenSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if(innerWidth < 450)
      this.view = [370,300];
  }

  onSelect(event: any) {
    console.log(event);
  }

  override ngOnInit(): void {
    let token = sessionStorage.getItem('access_token');
    if(token)
      this.context.token = token;

    this.getIMCs();

    this.captureScreenSize();
    window.addEventListener('resize', this.captureScreenSize.bind(this));
  }
  override ngOnDestroy(): void {
    window.removeEventListener('resize', this.captureScreenSize.bind(this));
  }

  open(content: any) {
    this.modalService.open(content);
  }
  getIMCs(){
    this.modalService.dismissAll();
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
      },
      complete: () => {
        this.single = this.body.map(x => {
          let formmatDate = x.createDate
          ? new Date(x.createDate).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' })
          : null;
          return {
            name: formmatDate,
            value: x.imc
          }
        });

      }
    });
  }
  deleteBody(id?: string){
      if(id){
      this.bodyService.doDeleteBody(id).subscribe({
        next : (result) => {
          this.toastr.success("Imc excluído com sucesso!");
        },
        error: (err) => {
          this.toastr.error(err);
        },
        complete: () => {
          this.getIMCs();
        }
      });
    }
  }
}
