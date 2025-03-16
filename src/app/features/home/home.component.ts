import { CommonModule } from '@angular/common';
import { Component, Injector } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { ItensMetaModel } from 'src/app/shared/models/meta.model';
import { MetaService } from 'src/app/shared/services/meta.service';
import { SharedModule } from 'src/app/shared/shared.module';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
      CommonModule,
      SharedModule,
      NgbProgressbarModule,
      NgxChartsModule
    ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ComponentBase {

   view: [number, number] = [400, 400];

    itens !: ItensMetaModel[];
    charts: any = [];

    successValue!: number;

    //options chart
    gradient: boolean = true;
    showLegend: boolean = false;
    showLabels: boolean = true;
    isDoughnut: boolean = true;

    colorScheme: any = {
      domain: ['#51A351','#C7C7C7']
    };
  constructor(public override injector: Injector, private metasService: MetaService) {
    super(injector);

  }
  override ngOnInit(): void {
    this.captureScreenSize();
    window.addEventListener('resize', this.captureScreenSize.bind(this));
    this.getMetas();
  }

  override ngOnDestroy(): void {
    window.removeEventListener('resize', this.captureScreenSize.bind(this));
  }

  captureScreenSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if(innerWidth < 450)
      this.view = [300,300];
  }

  getMetas(){
    let userId = sessionStorage.getItem("user_id")!;

    this.metasService.doGetMetas(userId).subscribe({
      next : (result) => {
        this.itens = result;
      },
      complete: () => {
        this.getChart();
      }
    });
  }

  getChart(){
    let countConcluido = 0;
    let countAguardando = 0;
          this.itens.forEach((x: ItensMetaModel) => {
            if(x.state == 1)
              countConcluido++;
            else if(x.state == 2)
              countAguardando++;
          });
          this.successValue  = (countConcluido / (countConcluido + countAguardando)) * 100;
          this.charts = [
            {
              name: "Concluído",
              value: countConcluido
            },
            {
              name: "Em andamento",
              value: countAguardando
            }
          ];
  }
}

