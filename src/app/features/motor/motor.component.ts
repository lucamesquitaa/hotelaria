import { Component, inject, Injector, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { NgbCalendar, NgbDate, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { MenubarComponent } from 'src/app/shared/components/menubar/menubar.component';
import { QuartosModel } from 'src/app/shared/models/quartos.model';
import { AddDisponibilidadeAdd, DisponiModel, DisponiResponseApi, QuartoDisponibilidade } from 'src/app/shared/models/reserva.model';
import { ResponseApi } from 'src/app/shared/models/response.api';
import { DateRangeService } from 'src/app/shared/services/date-range.service';
import { DisponibilidadeService } from 'src/app/shared/services/disponibilidade.service';
import { HotelService } from 'src/app/shared/services/hotel.service';
import { MenubarService } from 'src/app/shared/services/menubar.service';
import { QuartosService } from 'src/app/shared/services/quartos.service';

@Component({
  selector: 'app-motor',
  standalone: false,
  templateUrl: './motor.component.html',
  styleUrl: './motor.component.scss'
})
export class MotorComponent extends ComponentBase{
  // track collapse per quarto (keyed by quarto id)
  collapsedMap: { [quartoId: string]: boolean } = {};
  // track collapse per hotel (keyed by hotel name)
  hotelCollapsedMap: { [hotelName: string]: boolean } = {};
  // array of { label, iso } to render header and allow date comparisons
  quartosPerHotel!: QuartosModel[];
  idModal!: number;
  groupedByQuarto!: QuartoDisponibilidade[] ;

  collapsed: boolean = false;
  //calendar
  calendar = inject(NgbCalendar);

	hoveredDate: NgbDate | null = null;
	fromDate!: NgbDate | null ;
	toDate!: NgbDate | null;


  totalAdd: number = 0;
  //calendar
  
   private modalService = inject(NgbModal);
  
  // convert NgbDate to UTC ISO (YYYY-MM-DDTHH:mm:ss.sssZ)
  private toIsoUtc = (d: NgbDate | null): string => {
    if (!d) return '';
    const jsDate = new Date(Date.UTC(d.year, d.month - 1, d.day, 0, 0, 0));
    return jsDate.toISOString();
  };
   
  hoteis: any[] | undefined;
  hotelId: string | null = null;

  addReservaData!: AddDisponibilidadeAdd;
  addReservaQuartoId!: string | undefined;
  addReservaStatus!: string | undefined;
  addQuartoLista!: QuartosModel[] | undefined;
  mostraQuarto: boolean = false;
  mostraTudo: boolean = false;

  allDates: { label: string; iso: string }[] = [];
  /**
   *
   */
  constructor(public override injector: Injector, 
            private hotelService: HotelService,
            public menubarService: MenubarService,
            public dateRangeService: DateRangeService,
            private disponibilidadeService: DisponibilidadeService,
            public quartosService: QuartosService,
            private cdr: ChangeDetectorRef
  ) {
    super(injector);
    
  }

  override ngOnInit(): void {
    super.ngOnInit();
    // initialize date range service and local `allDates` from calendar defaults
    // Do not overwrite an existing shared date range set by another component
    const existing = this.dateRangeService.getDateRange() || { startDate: '', endDate: '' };
    if (!existing.startDate || !existing.endDate) {
      this.dateRangeService.setDateRange(this.toIsoUtc(this.fromDate), this.toIsoUtc(this.toDate ?? this.fromDate));
    }
    this.allDates = this.dateRangeService.getAllDatesBetween();

     this.activatedRoute.paramMap.subscribe(params => {
      this.hotelId = params.get('hotelId');
      this.getAllQuartos(this.hotelId!);
    });
    
    
  }

  reloadPeriodoDisponibilidade() {
    if (!this.fromDate || !this.toDate || !this.groupedByQuarto?.length) return;

     // Ensure UTC ISO strings to satisfy PostgreSQL 'timestamptz'
    const toIsoUtc = (d: NgbDate): string => {
      const jsDate = new Date(Date.UTC(d.year, d.month - 1, d.day, 0, 0, 0));
      return jsDate.toISOString();
    };

    const startIso = toIsoUtc(this.fromDate);
    const endIso = toIsoUtc(this.toDate);

    this.groupedByQuarto.forEach(q => {
      this.disponibilidadeService
        .doGetDisponibilidadePorPeriodo(q.id, startIso, endIso)
        .subscribe(resp => {
          q.disponiQuarto = resp.data || [];
        });
    });
  }


   toggle(quartoId: string | number) {
    const key = String(quartoId);
    this.collapsedMap[key] = !this.collapsedMap[key];
  }

  isCollapsed(quartoId: string | number) {
    const key = String(quartoId);
    return this.collapsedMap[key] ?? true;
  }

  toggleHotel(hotelName: string) {
    const key = String(hotelName);
    this.hotelCollapsedMap[key] = !this.hotelCollapsedMap[key];
  }

  isHotelCollapsed(hotelName: string) {
    const key = String(hotelName);
    // default to true (collapsed) when not set
    return this.hotelCollapsedMap[key] ?? false;
  }

// doGetAllHoteis(){
//   this.groupedByHotel = {};
//   this.hotelService.doGetUserIdHoteis().subscribe({
//     next: (result) => {
//       this.hoteis = result.data?.map(hotel => {
//         return {
//           ...hotel,
//           name: hotel.name.toUpperCase(),
//           id: hotel.id
//         };
//       });
//     },
//     complete: () => {
//       this.hoteis?.forEach((hotel: any) => {
//         this.getAllQuartos(hotel);
//       });
      
//     }
//   });
// }

toggleCollapse(hotelKey: string) {

    this.collapsed = !this.collapsed;
  }

  handleRefresh(): void {
    if (this.hotelId) {
      this.getAllQuartos(this.hotelId);
      //atualizar componente filho
      this.cdr.detectChanges();
    }
  }

getAllQuartos(hotelId: string) {
    console.log('motor: getAllQuartos called for hotelId=', hotelId);
    this.showLoading();
    this.quartosService.doGetQuartosByHotelId(hotelId).subscribe({
      next: (response: ResponseApi<QuartosModel[]>) => {
        if ((response.sucesso || response.success) && response.data) {
          this.quartosPerHotel = response.data;
          this.addQuartoLista = response.data;
        } else {
          this.quartosPerHotel = [];
        }
      },
      error: (error) => {
        const errorMessage = error.message || 'Erro ao carregar quartos do hotel';
        console.error('Erro na resposta:', errorMessage);
        this.toastr.error(errorMessage);
        this.hideLoading();
      },
      complete: () => {
        this.hideLoading();
        let allDisponibilidadeQuartos: QuartoDisponibilidade[] = [];
        let completedRequests = 0;
        const totalQuartos = this.quartosPerHotel?.length || 0;


        if (totalQuartos === 0) {
          this.tratamentoFinal([]);
          return;
        }

        this.quartosPerHotel.forEach(quarto => {
          this.disponibilidadeService.doGetDisponibilidade(quarto.id).subscribe({
            next: (response: ResponseApi<any>) => {
              console.log(`motor: disponibilidade for quarto ${quarto.id}`, response);
              if ((response.sucesso || response.success) && response.data) {
                const disponiArray = Array.isArray(response.data) ? response.data : [response.data];

                disponiArray.forEach((disponi: DisponiModel) => {
                  disponi.status = disponi.status as unknown as number;
                  disponi.statusString = this.disponiModelStatusString(disponi.status);
                });

                allDisponibilidadeQuartos.push({
                  id: quarto.id,
                  name: quarto.name,
                  number: quarto.numero,
                  disponiQuarto: disponiArray
                });
              }
            },
            error: (error) => {
              const errorMessage = error.message || 'Erro ao carregar disponibilidade do quarto';
              console.error('Erro na resposta:', errorMessage);
              this.toastr.error(errorMessage);
            },
            complete: () => {
              completedRequests++;
              if (completedRequests === totalQuartos) {
                this.tratamentoFinal(allDisponibilidadeQuartos);
              }
            }
          });
        });
      }
    });
    }

  disponiModelStatusString(status: number): string {
        switch (status) {
        case 1: return 'Disponível';
        case 2: return 'Pré-Reserva';
        case 3: return 'Aguardando Pagamento';
        case 4: return 'Bloqueado';
        case 5: return 'Confirmada';
        default: return '';
      }
    }

  getDaysOfYear(year: number): { label: string; iso: string }[] {
    const dates: { label: string; iso: string }[] = [];
    const start = new Date(year, 0, 1);
    const end = new Date(year, 11, 31);

    const weekdays = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const weekday = weekdays[d.getDay()];
      const iso = d.toISOString().slice(0,10);
      dates.push({ label: `${weekday} (${day}/${month})`, iso });
    }

    return dates;
  }

  tratamentoFinal(allDisponibilidadeQuartos: QuartoDisponibilidade[]) {
    // Não resetar se já existir dados
    if (!this.groupedByQuarto) {
      this.groupedByQuarto = [];
    }
    
    this.groupedByQuarto = allDisponibilidadeQuartos.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
    // ensure Angular updates the view
    try {
      this.cdr.detectChanges();
    } catch (err) {
    }

  }

  // Helper: list of expanded quartos within a hotel
  getExpandedQuartos(quartos: QuartoDisponibilidade[]): QuartoDisponibilidade[] {
    return quartos.filter(q => !this.isCollapsed(q.id));
  }

  openConfirmModal(content: TemplateRef<any>, id: number) {
    // Initialize form model to avoid undefined bindings in the modal
    this.addReservaData = {
      status: 0,
      startDate: '',
      endDate: '',
      dayPrice: 0,
      minDays: 1,
      maxDays: 1,
      reembolsavel: false
    };
    this.idModal = id;
    this.modalService.open(content, { size: 'lg' });
  }

  addReserva(){
    if(this.idModal == 1)
      this.addReservaData.status = 1;

    if(!this.addReservaData || !this.addReservaQuartoId || !this.addReservaData.status ||
        this.addReservaData.startDate == '' || this.addReservaData.dayPrice < 0 
    ){
      this.reset();
      this.toastr.error('Preencha todos os campos.'); 
      return;
    }
    this.showLoading();
    this.disponibilidadeService.addDisponibilidade(this.addReservaData, this.addReservaQuartoId).subscribe({
      next: (response: ResponseApi<any>) => {
        
        if ((response.sucesso || response.success)) {
          this.toastr.success('Reserva adicionada com sucesso!');
        }
      },
      error: (error: any) => {
        const errorMessage = error.message || 'Erro ao adicionar reserva';
        console.error('Erro na resposta:', errorMessage);
        this.toastr.error(errorMessage);
        this.reset();
        this.hideLoading();
      },
      complete: () => {
        this.hideLoading();
        this.reset();
        this.addReservaQuartoId = undefined;
        this.addReservaStatus = undefined;
        this.modalService.dismissAll();
        this.reloadPeriodoDisponibilidade();
      }
    });
  }

  trataStatus() {
    this.addReservaData.status = parseInt(this.addReservaStatus!);
  }

  // quartosPerHotelId():any {
  //   if(this.addReservaHotelId){
  //       this.quartosService.doGetQuartosByHotelId(this.addReservaHotelId).subscribe({
  //         next: (response: ResponseApi<QuartosModel[]>) => {
  //           this.addQuartoLista = response.data;
  //           this.mostraQuarto = true; //mostra formulário de quartos
  //         },
  //         error: (error) => {
  //           const errorMessage = error.message || 'Erro ao carregar quartos do hotel';
  //           console.error('Erro na resposta:', errorMessage);
  //           this.toastr.error(errorMessage);
  //           this.hideLoading();
  //         },
  //         complete: () => {
  //           this.hideLoading();

  //         }
  //       });
  //     }
  // }
  
  mostraTudoBool(){
    if(this.addReservaQuartoId != "undefined")
      this.mostraTudo = true;
    else
      this.mostraTudo = false;

    if (this.mostraTudo && !this.addReservaData) {
      this.addReservaData = {
        status: 0,
        startDate: '',
        endDate: '',
        dayPrice: 0,
        minDays: 0,
        maxDays: 0,
        reembolsavel: true
      };
    }
  }

  reset(){
    this.addReservaQuartoId = undefined;
    this.addReservaStatus = undefined;
    this.mostraQuarto = false;
    this.mostraTudo = false;
    this.addReservaData = {
        status: 0,
        startDate: '',
        endDate: '',
        dayPrice: 0,
        minDays: 0,
        maxDays: 0,
        reembolsavel: true
      };
  }


  onDateSelection(date: NgbDate) {
		if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
			this.toDate = date;
		} else {
			this.toDate = null;
			this.fromDate = date;
		}

      // Ensure UTC ISO strings to satisfy PostgreSQL 'timestamptz'
      const toIsoUtc = (d: NgbDate): string => {
        const jsDate = new Date(Date.UTC(d.year, d.month - 1, d.day, 0, 0, 0));
        return jsDate.toISOString();
      };

    this.addReservaData.startDate = toIsoUtc(this.fromDate);
    this.addReservaData.endDate = toIsoUtc(this.toDate ?? this.fromDate);

    if (this.idModal == 2) {
      this.totalAdd = 0;
      const selStartDate = new Date(this.addReservaData.startDate);
      const selEndDate = new Date(this.addReservaData.endDate);
      // treat selected end date as inclusive (end of day) to avoid timezone/truncation issues
      const selEndDateInclusive = new Date(selEndDate);
      selEndDateInclusive.setHours(23, 59, 59, 999);

      // iterate with for..of so we can early-return when encountering an error
      const msPerDay = 24 * 60 * 60 * 1000;
      const selDays = Math.floor((selEndDateInclusive.getTime() - selStartDate.getTime()) / msPerDay) + 1;
      let coveredDays = 0;

      for (const q of this.groupedByQuarto || []) {
        if (q.id == this.addReservaQuartoId) {
          if (!q.disponiQuarto) continue;
          for (const disp of q.disponiQuarto) {
            if (!disp.startDate || !disp.endDate) continue;

            const dispStartDate = new Date(disp.startDate);
            const dispEndDate = new Date(disp.endDate);
            // treat disponibilidade end date as inclusive (end of day)
            const dispEndDateInclusive = new Date(dispEndDate);
            dispEndDateInclusive.setHours(23, 59, 59, 999);

            const overlapStartTime = Math.max(dispStartDate.getTime(), selStartDate.getTime());
            const overlapEndTime = Math.min(dispEndDateInclusive.getTime(), selEndDateInclusive.getTime());

            console.debug('motor overlap check', {
              quartoId: q.id,
              dispStart: disp.startDate,
              dispEnd: disp.endDate,
              selStart: this.addReservaData.startDate,
              selEnd: this.addReservaData.endDate,
              overlapStart: new Date(overlapStartTime).toISOString(),
              overlapEnd: new Date(overlapEndTime).toISOString()
            });

            if (overlapStartTime <= overlapEndTime) {
              if (disp.dayPrice > 0) {
                const days = Math.floor((overlapEndTime - overlapStartTime) / msPerDay) + 1;
                const validDays = Math.max(0, days);
                this.totalAdd += disp.dayPrice * validDays;
                coveredDays += validDays;
              } else {
                this.toastr.error('Existem dias sem preço definido. Faça o cadastro das Taxas.');
              }
            }
          }
        }
      }

      // If the total covered days is less than the selected days, some days have no price defined
      if (coveredDays < selDays) {
        console.debug('motor coverage check', { selDays, coveredDays });
        this.toastr.error('Existem dias sem preço definido. Faça o cadastro das Taxas.');
      }
    }
  }

    
	

	isHovered(date: NgbDate) {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
		);
	}

	isInside(date: NgbDate) {
		return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	}

	isRange(date: NgbDate) {
		return (
			date.equals(this.fromDate) ||
			(this.toDate && date.equals(this.toDate)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
	}
}