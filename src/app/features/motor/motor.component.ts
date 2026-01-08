import { Component, Injector } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { MenubarComponent } from 'src/app/shared/components/menubar/menubar.component';
import { QuartosModel } from 'src/app/shared/models/quartos.model';
import { DisponiModel, DisponiResponseApi, QuartoDisponibilidade } from 'src/app/shared/models/reserva.model';
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
  
  hoteis: any[] | undefined;
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
  this.hotelService.doGetUserIdHoteis().subscribe({
    next: (result) => {
      console.log(result);
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
          console.log('Resposta da API:', response);
          if ((response.sucesso || response.success) && response.data) {
            this.quartosPerHotel = response.data;
            console.log('Quartos carregados:', this.quartosPerHotel);
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
                console.log('Resposta da API de disponibilidade:', response);
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
    console.log('Mapping status:', status);
        switch (status) {
        case 1: return 'Pendente';
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
  }

  // Helper: list of expanded quartos within a hotel
  getExpandedQuartos(quartos: QuartoDisponibilidade[]): QuartoDisponibilidade[] {
    return quartos.filter(q => !this.isCollapsed(q.id));
  }
 
}