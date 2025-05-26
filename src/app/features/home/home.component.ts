import { CommonModule, JsonPipe } from '@angular/common';
import { Component, Injector } from '@angular/core';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map  } from 'rxjs/operators';
import { ComponentBase } from 'src/app/shared/components/component.base';

const hoteis = [
	{
		name: "Hotel ABC",
		id: "hotel-abc"
	},
	{
		name: "Hotel Teste 1",
		id: "hotel-teste-1"
	},
	{
		name: "Hotel Teste 2",
		id: "hotel-teste-2"
	},
];


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ComponentBase {

  hotel: any;

  constructor(public override injector: Injector) {
    super(injector);

  }
  override ngOnInit(): void {
  }

	formatter = (result: any) => result.name.toUpperCase() + " (" + result.id + ")";

	search: OperatorFunction<string, readonly any[]> = (text$: Observable<any>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term) =>
				term === ''
					? []
					: hoteis.filter((v) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
			),
		);

		visitHotel(){
			this.router.navigate(['hotel/' + this.hotel.id]);
		}
}

