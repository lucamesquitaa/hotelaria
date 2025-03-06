import { CommonModule } from '@angular/common';
import { Component, Injector, ViewChild } from '@angular/core';
import { NgbCarouselModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
      CommonModule,
      SharedModule,
      NgbCarouselModule
    ],
    providers: [NgbCarouselConfig],
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

