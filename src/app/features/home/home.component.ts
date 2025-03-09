import { CommonModule } from '@angular/common';
import { Component, Injector } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
      CommonModule,
      SharedModule,
    ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ComponentBase {

  constructor(public override injector: Injector) {
    super(injector);

  }

  override ngOnInit(): void {
    this.context.token = false;
  }

}

