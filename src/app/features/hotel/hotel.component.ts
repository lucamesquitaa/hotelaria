import { CommonModule } from '@angular/common';
import { Component, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-hotel',
  standalone: false,
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.scss'
})
export class HotelComponent extends ComponentBase {
   hotelId!: string | null;

  constructor(private route: ActivatedRoute,
              public override injector: Injector,
  ) {
    super(injector);
    this.hotelId = this.route.snapshot.paramMap.get('hotel');
    // Ou para observar mudanças:
    // this.route.paramMap.subscribe(params => {
    //   this.hotelId = params.get('hotel');
    // });
  }
}
