import { Component, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentBase } from 'src/app/shared/components/component.base';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends ComponentBase{


  idItem!: any;

  override onReceiveLiterals(): void {
    throw new Error('Method not implemented.');
  }

  constructor(activatedRoute: ActivatedRoute, override injector: Injector) {
    super(injector);
  }

  ngAfterViewInit(): void {
    this.idItem = this.activatedRoute.snapshot.params["id"];
  }
}
