import { Component, Input, Output, EventEmitter, OnChanges, OnInit, OnDestroy, SimpleChanges, Injector, ChangeDetectorRef } from '@angular/core';
import { QuartosModel } from '../../models/quartos.model';
import { DisponiModel, QuartoDisponibilidade } from '../../models/reserva.model';
import { ComponentBase } from '../component.base';

@Component({
  selector: 'app-quartoreserva',
  standalone: false,
  templateUrl: './quartoreserva.component.html',
  styleUrls: ['./quartoreserva.component.scss']
})
export class QuartoreservaComponent extends ComponentBase implements OnInit, OnDestroy {
  constructor(public override injector: Injector, private cdr: ChangeDetectorRef) {
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


  override ngOnInit(): void {
    super.ngOnInit();
    // Se houve reload via navegador, restaurar e emitir refresh
    const pending = sessionStorage.getItem('quarto-refresh-pending');
    if (pending) {
      sessionStorage.removeItem('quarto-refresh-pending');
      this.refresh.emit();
      this.cdr.detectChanges();
    }

    // escutar F5: prevenir reload do navegador e emitir refresh
    this.f5Handler = (e: KeyboardEvent) => {
      const isF5 = e.key === 'F5' || (e as any).keyCode === 116;
      if (!isF5) return;
      e.preventDefault();
      this.refresh.emit();
      this.cdr.detectChanges();
    };
    window.addEventListener('keydown', this.f5Handler);

    // intercept browser refresh/navigation: salvar marcador e pedir confirmação
    this.beforeUnloadHandler = (e: BeforeUnloadEvent) => {
      try { sessionStorage.setItem('quarto-refresh-pending', '1'); } catch {}
      e.preventDefault();
      e.returnValue = '';
    };
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
      const start = toUtcDay(d.startDate ?? null);
      const end = toUtcDay(d.endDate ?? null);
      if (start !== null && end !== null && target >= start && target <= end) return d;
    }
    return null;
  }
  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
}