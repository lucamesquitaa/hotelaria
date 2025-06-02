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

  constructor(public override injector: Injector, private hotelService: HotelService) {
    super(injector);

  }
  override ngOnInit(): void {
		this.doGetAllHoteis()
  }

	doGetAllHoteis(){
		this.hotelService.doGetAllHoteis().subscribe({
			next: (result) => {
				this.hoteis = result;
				this.filteredHoteis = this.hoteis;
			},
		});
	}

	formatter = (result: any) => result.name.toUpperCase() + " (" + result.id + ")";

	search: OperatorFunction<string, readonly any[]> = (text$: Observable<any>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term) =>
				term === ''
					? []
					: this.hoteis.filter((v) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
			),
		);

		onHotelSelecionado() {
			if(!this.hotel) {
				this.filteredHoteis = this.hoteis;
				return;
				}
				this.filteredHoteis = this.hoteis.map((v) => this.hotel.name === v.name ? v : null).filter((v) => v !== null);
	 	}

		visitarSite(item: any){
			this.router.navigate(['hotel/' + item.url]);
		}
}

