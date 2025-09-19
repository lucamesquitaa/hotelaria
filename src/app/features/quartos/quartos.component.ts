import { Component, Injector, OnInit } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component.base';

@Component({
  selector: 'app-quartos',
  standalone: false,
  templateUrl: './quartos.component.html',
  styleUrl: './quartos.component.scss'
})
export class QuartosComponent extends ComponentBase implements OnInit {



  constructor(public override injector: Injector) {
    super(injector);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    // ou, para escutar mudanças:
    this.activatedRoute.paramMap.subscribe(params => {
      const hotelId = params.get('hotelId');
      if (hotelId) {
        console.log(hotelId);
      }
    });
  }
}
