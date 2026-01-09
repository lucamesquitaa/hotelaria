import { Component, inject, Injector, TemplateRef } from '@angular/core';
import { NgbCalendar, NgbDate, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { MenubarComponent } from 'src/app/shared/components/menubar/menubar.component';
import { QuartosModel } from 'src/app/shared/models/quartos.model';
import { AddDisponibilidadeAdd, DisponiModel, DisponiResponseApi, QuartoDisponibilidade } from 'src/app/shared/models/reserva.model';
import { ResponseApi } from 'src/app/shared/models/response.api';
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
  dates: { label: string; iso: string }[] = [];
  quartosPerHotel!: QuartosModel[];

  groupedByHotel!: { [hotelName: string]: QuartoDisponibilidade[] };


  //calendar
  calendar = inject(NgbCalendar);

	hoveredDate: NgbDate | null = null;
	fromDate: NgbDate = this.calendar.getToday();
	toDate: NgbDate | null = this.calendar.getNext(this.fromDate, 'd', 10);

  //calendar
  
   private modalService = inject(NgbModal);
   
  hoteis: any[] | undefined;

  addReservaData!: AddDisponibilidadeAdd;
  addReservaHotelId!: string | undefined;
  addReservaQuartoId!: string | undefined;
  addReservaStatus!: string | undefined;
  addQuartoLista!: QuartosModel[] | undefined;
  mostraQuarto: boolean = false;
  mostraTudo: boolean = false;

  /**
   *
   */
  constructor(public override injector: Injector, 
            private hotelService: HotelService,
            public menubarService: MenubarService,
            private disponibilidadeService: DisponibilidadeService,
            public quartosService: QuartosService 
  ) {
    super(injector);
    
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.dates = this.getDaysOfYear(new Date().getFullYear());
    this.doGetAllHoteis();

    
  }


   toggle(quartoId: string | number) {
    const key = String(quartoId);
    this.collapsedMap[key] = !this.collapsedMap[key];
  }

  isCollapsed(quartoId: string | number) {
    const key = String(quartoId);
    // default to true (collapsed) when not set
    return this.collapsedMap[key] ?? true;
  }

  toggleHotel(hotelName: string) {
    const key = String(hotelName);
    this.hotelCollapsedMap[key] = !this.hotelCollapsedMap[key];
  }

  isHotelCollapsed(hotelName: string) {
    const key = String(hotelName);
    // default to true (collapsed) when not set
    return this.hotelCollapsedMap[key] ?? true;
  }

doGetAllHoteis(){
  this.groupedByHotel = {};
  this.hotelService.doGetUserIdHoteis().subscribe({
    next: (result) => {
      this.hoteis = result.data?.map(hotel => {
        return {
          ...hotel,
          name: hotel.name.toUpperCase(),
          id: hotel.id
        };
      });
    },
    complete: () => {
      this.hoteis?.forEach((hotel: any) => {
        this.getAllQuartos(hotel);
      });
      
    }
  });
}

   getAllQuartos(hotel: any) {
      this.showLoading();
      this.quartosService.doGetQuartosByHotelId(hotel.id).subscribe({
        next: (response: ResponseApi<QuartosModel[]>) => {
          if ((response.sucesso || response.success) && response.data) {
            this.quartosPerHotel = response.data;
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
          const totalQuartos = this.quartosPerHotel.length;

          if (totalQuartos === 0) {
            return;
          }

          this.quartosPerHotel.forEach(quarto => {
            this.disponibilidadeService.doGetDisponibilidade(quarto.id).subscribe({
              next: (response: ResponseApi<any>) => {
                if ((response.sucesso || response.success) && response.data) {
                  const disponiArray = Array.isArray(response.data) ? response.data : [response.data];

                  disponiArray.forEach((disponi: DisponiModel) => {
                    disponi.status = disponi.status as unknown as number;
                    disponi.statusString = this.disponiModelStatusString(disponi.status);
                  });

                  allDisponibilidadeQuartos.push({
                    id: quarto.id,
                    hotelName: hotel.name,
                    hotelId: hotel.id,
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
    if (!this.groupedByHotel) {
      this.groupedByHotel = {};
    }
    
    allDisponibilidadeQuartos.forEach(quarto => {
      if (!this.groupedByHotel[quarto.hotelName]) {
        this.groupedByHotel[quarto.hotelName] = [];
      }
      this.groupedByHotel[quarto.hotelName].push(quarto);
    });

    // Ordena os quartos (QuartoDisponibilidade) por número dentro de cada hotel
    Object.keys(this.groupedByHotel).forEach((hotelName) => {
      this.groupedByHotel[hotelName].sort((a, b) => {
        const na = typeof a.number === 'number' ? a.number : parseInt(String(a.number)) || 0;
        const nb = typeof b.number === 'number' ? b.number : parseInt(String(b.number)) || 0;
        return na - nb;
      });
    });

    const sorted: { [hotelName: string]: QuartoDisponibilidade[] } = {};
    Object.keys(this.groupedByHotel)
      .sort((a, b) => a.localeCompare(b, 'pt-BR'))
      .forEach((key) => {
        sorted[key] = this.groupedByHotel[key];
      });
    this.groupedByHotel = sorted;

    console.log("DFIM>");
    console.log(this.groupedByHotel);
  }

  // Helper: list of expanded quartos within a hotel
  getExpandedQuartos(quartos: QuartoDisponibilidade[]): QuartoDisponibilidade[] {
    return quartos.filter(q => !this.isCollapsed(q.id));
  }

  openConfirmModal(content: TemplateRef<any>) {
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
    this.modalService.open(content, { size: 'lg' });
  }

  addReserva(){
    if(!this.addReservaData || !this.addReservaHotelId || !this.addReservaQuartoId || !this.addReservaStatus ||
        this.addReservaData.startDate == '' || this.addReservaData.dayPrice < 0 
    ){
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
        this.hideLoading();
      },
      complete: () => {
        this.hideLoading();
        this.addReservaData = {
          status: 0,
          startDate: '',
          endDate: '',
          dayPrice: 0,
          minDays: 1,
          maxDays: 1,
          reembolsavel: true
        };
        this.addReservaHotelId = undefined;
        this.addReservaQuartoId = undefined;
        this.addReservaStatus = undefined;
        this.modalService.dismissAll();
        // Recarregar dados
        this.doGetAllHoteis();
      }
    });
  }

  trataStatus() {
    this.addReservaData.status = parseInt(this.addReservaStatus!);
  }

  quartosPerHotelId():any {
    if(this.addReservaHotelId){
        this.quartosService.doGetQuartosByHotelId(this.addReservaHotelId).subscribe({
          next: (response: ResponseApi<QuartosModel[]>) => {
            this.addQuartoLista = response.data;
            this.mostraQuarto = true; //mostra formulário de quartos
          },
          error: (error) => {
            const errorMessage = error.message || 'Erro ao carregar quartos do hotel';
            console.error('Erro na resposta:', errorMessage);
            this.toastr.error(errorMessage);
            this.hideLoading();
          },
          complete: () => {
            this.hideLoading();

          }
        });
      }
  }
  
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