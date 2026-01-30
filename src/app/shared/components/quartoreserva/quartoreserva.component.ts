import { Component, Input, Output, EventEmitter, OnChanges, OnInit, OnDestroy, SimpleChanges, Injector, ChangeDetectorRef, TemplateRef, inject } from '@angular/core';
import { QuartosModel } from '../../models/quartos.model';
import { AddDisponibilidadeAdd, DisponiModel, QuartoDisponibilidade, UopdateDisponibilidadeDay } from '../../models/reserva.model';
import { ComponentBase } from '../component.base';
import { DisponibilidadeService } from '../../services/disponibilidade.service';
import { ResponseApi } from '../../models/response.api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quartoreserva',
  standalone: false,
  templateUrl: './quartoreserva.component.html',
  styleUrls: ['./quartoreserva.component.scss']
})
export class QuartoreservaComponent extends ComponentBase implements OnInit, OnDestroy {
  constructor(public override injector: Injector, 
              private disponibilidadeService: DisponibilidadeService,
              private cdr: ChangeDetectorRef) {
    super(injector);
  }
  @Input() dados!: QuartoDisponibilidade | null;
  @Input() collapsed: boolean = false;
  // dates passed from motor: array of { label, iso }
  @Input() dates: { label: string; iso: string }[] = [];

  // dynamic alternate classes for row/column coloring
  @Input() altClasses: string[] = ['alt-white', 'alt-blue'];
  // optional mapping from disponibilidade status to CSS class
  @Input() statusClassMap: Record<string, string> = {};

  @Output() refresh = new EventEmitter<void>();
  private f5Handler?: (e: KeyboardEvent) => void;
  private beforeUnloadHandler?: (e: BeforeUnloadEvent) => void;

  private modalService = inject(NgbModal);

  editDayStr: string | undefined;
  editmaxDays: number | undefined;
  editminDays: number | undefined
  editdayPrice: number | undefined;
  status: number | undefined;
  disp: DisponiModel | null = null;
  statusString2: string | undefined;
  override ngOnInit(): void {
    super.ngOnInit();
   
    this.f5Handler = (e: KeyboardEvent) => {
      const key = (e.key || '').toString();
      const isF5 = key === 'F5' || (e as any).keyCode === 116;
      const isCtrlR = (e.ctrlKey || (e as any).metaKey) && (key.toLowerCase() === 'r' || (e as any).keyCode === 82);
      if (!isF5 && !isCtrlR) return;
      e.preventDefault();
      this.refresh.emit();
      this.cdr.detectChanges();
    };
    window.addEventListener('keydown', this.f5Handler);

    // intercept browser refresh e navegar par /motor
    this.beforeUnloadHandler = (e: BeforeUnloadEvent) => {
      // During unload we should do only synchronous, reliable actions.
      // Store a flag so the app can react after the page is reloaded.
      try {
        
        sessionStorage.setItem('quarto-refresh-pending', 'true');
      } catch (err) {
        // ignore storage errors during unload
      }
      // Setting returnValue ensures some browsers will run the handler
      // and may show a confirmation dialog. We don't attempt SPA
      // navigation here because navigation during unload is not dependable.
      e.preventDefault();
      (e as BeforeUnloadEvent).returnValue = '';
    };

    // Register the beforeunload listener so the handler runs on actual reloads/refreshes
    window.addEventListener('beforeunload', this.beforeUnloadHandler);

  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
    if (this.f5Handler) window.removeEventListener('keydown', this.f5Handler);
    if (this.beforeUnloadHandler) window.removeEventListener('beforeunload', this.beforeUnloadHandler);
  }


  // find disponibilidade for a given iso date string
  disponibilidadeForDate(iso: string) {

    if (!this.dados?.disponiQuarto) return null;

    const toUtcDay = (s?: string | null): number | null => {
      if (!s) return null;
      const part = s.includes('T') ? s.slice(0,10) : s.split(' ')[0];
      const parts = part.split('-').map(p => Number(p));
      if (parts.length !== 3 || parts.some(isNaN)) return null;
      return Date.UTC(parts[0], parts[1] - 1, parts[2]);
    };

    const target = toUtcDay(iso);
    if (target === null) return null;

    for (const d of this.dados.disponiQuarto) {
      this.dados.disponiQuarto["target"] = target;
      const start = toUtcDay(d.startDate ?? null);
      const end = toUtcDay(d.endDate ?? null);
      if (start !== null && end !== null && target >= start && target <= end){
        d["statusString"] = this.disponiModelStatusString(d.status);
        return d; 
      } 
    }
    return null;
  }
  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  editarDisponibilidade(content: TemplateRef<any>, disp: DisponiModel | null, dayIso: string) {
    this.disp = disp;
    let date = new Date(dayIso);
    date.setDate(date.getDate() + 1);
    this.editDayStr = date.toLocaleDateString('pt-BR');  
    this.editdayPrice = this.disp?.dayPrice;
    this.editmaxDays = this.disp?.maxDays;
    this.editminDays = this.disp?.minDays;

    if(this.disp?.status != 1){
      this.toastr.error('Só é possível editar disponibilidades "Disponível".');
      return;
    }


    this.modalService.open(content, { size: 'sm' });
  }

  getStatusClass(status: number): string {
  switch(status) {
    case 1:
      return 'verde';
    case 2:
      return 'amarelo';
    case 3:
      return 'laranja';
    case 4:
      return 'cinza';
    case 5:
      return 'vermelho';
    default:
      return 'white';
  }
}


  reset(){
    this.editdayPrice = undefined;
    this.editmaxDays = undefined;
    this.editminDays = undefined;
  }

   disponiModelStatusString(status: number) {
        switch (status) {
        case 1: return 'Disponível';break;
        case 2:  return 'Pré-Reserva';break;
        case 3:  return 'Aguardando Pagamento';break;
        case 4:  return 'Bloqueado';break;
        case 5:  return 'Confirmada';break;
        default:  return '';break;
      }
    }

    editReserva(){
     
      if(this.disp == null || this.editdayPrice === undefined || this.editmaxDays === undefined || this.editminDays === undefined){
        this.toastr.error('Preencha todos os campos antes de confirmar a edição da reserva.');
        return;
        
      }

         let addReservaData : UopdateDisponibilidadeDay = {
            Day: this.editDayStr!, 
            dayPrice: this.editdayPrice,
            maxDays: this.editmaxDays!,
            minDays: this.editminDays!
          };
      

     
        this.showLoading();
            this.disponibilidadeService.updateDisponibilidadeDay(addReservaData, this.dados!.id).subscribe({
              next: (response: ResponseApi<any>) => {
                
                if ((response.sucesso || response.success)) {
                  this.toastr.success('Reserva adicionada com sucesso!');
                  this.refresh.emit();
                }
              },
              error: (error: any) => {
                const errorMessage = error.message || 'Erro ao adicionar reserva';
                console.error('Erro na resposta:', error);
                this.toastr.error(errorMessage);
                this.reset();
                this.hideLoading();
              },
              complete: () => {
                this.hideLoading();
                this.modalService.dismissAll();
                this.reset();
              }
            });
    }
      // Helper para extrair apenas a data (YYYY-MM-DD) de uma string ISO
      private toDateString(dateStr: string): string {
        if (!dateStr) return '';
        // Pega apenas a parte da data antes do 'T' ou espaço
        const part = dateStr.includes('T') ? dateStr.split('T')[0] : dateStr.split(' ')[0];
        return part;
      }

      // Helper para comparar se uma data está dentro de um range
      private isDateInRange(targetIso: string, startDateStr: string, endDateStr: string): boolean {
        const target = this.toDateString(targetIso);
        const start = this.toDateString(startDateStr);
        const end = this.toDateString(endDateStr);
        
        if (!target || !start || !end) return false;
        
        return target >= start && target <= end;
      }

      getReservaForDate(iso: string) {
        if (!this.dados?.reservas) return null;
        
        const targetDateStr = this.toDateString(iso);
        
        for (const reserva of this.dados.reservas) {
          const checkInStr = this.toDateString(reserva.checkin);
          const checkOutStr = this.toDateString(reserva.checkout);
          
          if (targetDateStr >= checkInStr && targetDateStr <= checkOutStr) {
            return reserva;
          }
        }
        
        return null;
      }

      // Verifica se a data é o dia do check-in de uma reserva com early checkin
      hasEarlyCheckIn(iso: string): boolean {
        const reserva = this.getReservaForDate(iso);
        if (!reserva || !reserva.earlyCheckin) return false;
        
        const targetDateStr = this.toDateString(iso);
        const checkInDateStr = this.toDateString(reserva.checkin);
        
        return targetDateStr === checkInDateStr;
      }

      // Verifica se a data é o dia do check-out de uma reserva com late checkout
      hasLateCheckOut(iso: string): boolean {
        const reserva = this.getReservaForDate(iso);
        if (!reserva || !reserva.lateCheckout) return false;
        
        const targetDateStr = this.toDateString(iso);
        const checkOutDateStr = this.toDateString(reserva.checkout);
        
        return targetDateStr === checkOutDateStr;
      }

      // Verifica se é dia de check-in
      isCheckInDay(iso: string): boolean {
        const reserva = this.getReservaForDate(iso);
        if (!reserva) return false;
        
        const targetDateStr = this.toDateString(iso);
        const checkInDateStr = this.toDateString(reserva.checkin);
        
        return targetDateStr === checkInDateStr;
      }

      // Verifica se é dia de check-out
      isCheckOutDay(iso: string): boolean {
        const reserva = this.getReservaForDate(iso);
        if (!reserva) return false;
        
        const targetDateStr = this.toDateString(iso);
        const checkOutDateStr = this.toDateString(reserva.checkout);
        
        return targetDateStr === checkOutDateStr;
      }

      // Retorna a classe CSS para a primeira metade da barra
      getFirstHalfClass(iso: string): string {
        const reserva = this.getReservaForDate(iso);
        if (!reserva) return '';
        
        // No dia do check-in SEM early checkin, primeira metade fica disponível
        if (this.isCheckInDay(iso) && !reserva.earlyCheckin) {
          return 'disponivel-half';
        }
        
        // No dia do check-out, primeira metade é ocupada
        if (this.isCheckOutDay(iso)) {
          return this.getReservaStatusClass(iso);
        }
        
        return this.getReservaStatusClass(iso);
      }

      // Retorna a classe CSS para a segunda metade da barra
      getSecondHalfClass(iso: string): string {
        const reserva = this.getReservaForDate(iso);
        if (!reserva) return '';
        
        // No dia do check-in, segunda metade é ocupada
        if (this.isCheckInDay(iso)) {
          return this.getReservaStatusClass(iso);
        }
        
        // No dia do check-out SEM late checkout, segunda metade fica disponível
        if (this.isCheckOutDay(iso) && !reserva.lateCheckout) {
          return 'disponivel-half';
        }
        
        return this.getReservaStatusClass(iso);
      }

      // Verifica se deve mostrar barra dividida
      // SÓ mostra split quando: check-in SEM early OU check-out SEM late
      shouldShowSplitBar(iso: string): boolean {
        const reserva = this.getReservaForDate(iso);
        if (!reserva) return false;

        const isCheckin = this.isCheckInDay(iso);
        const isCheckout = this.isCheckOutDay(iso);

        // Se é dia de check-in E NÃO tem early checkin -> mostra split
        if (isCheckin && !reserva.earlyCheckin) {
          return true;
        }

        // Se é dia de check-out E NÃO tem late checkout -> mostra split
        if (isCheckout && !reserva.lateCheckout) {
          return true;
        }

        // Caso contrário (early checkin = true ou late checkout = true ou dia normal), barra completa
        return false;
      }

      getReservaStatusClass(iso: string): string {
        const reserva = this.getReservaForDate(iso);
        if (!reserva) return '';
        
        // Use o status da reserva para determinar a cor
        switch(reserva.reservaStatus) {
          case 1: // Disponível
            return 'verde';
          case 2: // Pré-Reserva
            return 'amarelo';
          case 3: // Aguardando Pagamento
            return 'laranja';
          case 4: // Bloqueado
            return 'cinza';
          case 5: // Confirmada
            return 'vermelho';
          default:
            return '';
        }
      }

      getCombinedStatusClass(iso: string): string {
        let disp = this.disponibilidadeForDate(iso);
        const reserva = this.getReservaForDate(iso);
        
        // Prioridade: reserva sobrescreve disponibilidade
        if (reserva) {
          
          return this.getReservaStatusClass(iso);
        }
        
        if (disp) {
          
          return this.getStatusClass(disp.status);
        }


        
        return '';
      }
}
