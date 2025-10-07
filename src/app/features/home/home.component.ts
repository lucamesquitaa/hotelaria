import { Component, Injector } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map  } from 'rxjs/operators';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { HotelService } from 'src/app/shared/services/hotel.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ComponentBase {

  hotel: any;

	filteredHoteis: any[] = [];

  hoteis!: any[];

  constructor(public override injector: Injector) {
    super(injector);

  }
  override ngOnInit(): void {
  }
	buscar(){
		this.router.navigate(['catalogo']);
	}
}

