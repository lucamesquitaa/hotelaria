import { Component, Injector, Input } from '@angular/core';
import { ComponentBase } from '../component.base';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent extends ComponentBase {


  override onReceiveLiterals(): void {
    throw new Error('Method not implemented.');
  }

  constructor(override injector: Injector) {
    super(injector);
  }
}
