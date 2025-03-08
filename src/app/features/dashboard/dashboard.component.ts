import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NgbDropdownModule, NgbModal, NgbModalModule, NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';
import { Color, LegendPosition, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, SharedModule, NgbModalModule, NgbDropdownModule, NgbOffcanvasModule, NgxChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent extends ComponentBase{

  view: [number, number] = [400, 400];

  itens = [{
    "name": "Concluídos",
    "value": 5
  },
  {
    "name": "Em andamento",
    "value": 2
  },
  {
    "name": "Aguardando",
    "value": 3
  }];
  //options chart
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = true;

  override onReceiveLiterals(): void {
    throw new Error('Method not implemented.');
  }
  private modalService = inject(NgbModal);

  openLg(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'lg' });
	}

  override ngOnInit(): void {
    this.context.token = true;
    this.captureScreenSize();
    window.addEventListener('resize', this.captureScreenSize.bind(this));
  }

  override ngOnDestroy(): void {
    window.removeEventListener('resize', this.captureScreenSize.bind(this));
  }

  colorScheme: any = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };


  onSelect(event: any) {
    console.log(event);
  }

  captureScreenSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if(innerWidth < 450)
      this.view = [300,300];
  }
}
