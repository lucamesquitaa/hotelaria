import { Component, Injector, ViewChild } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component.base';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ComponentBase {
  override onReceiveLiterals(): void {
    throw new Error('Method not implemented.');
  }
  /**
   *
   */
  constructor(public override injector: Injector) {
    super(injector);

  }

  override ngOnInit(){
  }

}

