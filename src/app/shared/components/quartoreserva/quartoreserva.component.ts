import { Component, Input } from '@angular/core';
import { QuartosModel } from '../../models/quartos.model';
import { DisponiModel, QuartoDisponibilidade } from '../../models/reserva.model';
import { ComponentBase } from '../component.base';

@Component({
  selector: 'app-quartoreserva',
  standalone: false,
  templateUrl: './quartoreserva.component.html',
  styleUrls: ['./quartoreserva.component.scss']
})
export class QuartoreservaComponent extends ComponentBase{
  @Input() dados!: QuartoDisponibilidade;
  @Input() collapsed!: boolean;
  // dates passed from motor: array of { label, iso }
  @Input() dates: { label: string; iso: string }[] = [];
  // dynamic alternate classes for row/column coloring
  @Input() altClasses: string[] = ['alt-white', 'alt-blue'];
  // optional mapping from disponibilidade status to CSS class
  @Input() statusClassMap: Record<string, string> = {};

 
  override ngOnInit(): void {
    super.ngOnInit();
    console.log('quartoreserva dados:', this.dados);
  }

  // find disponibilidade for a given iso date string
  disponibilidadeForDate(iso: string) {
    if (!this.dados?.disponiQuarto) return null;
    return this.dados.disponiQuarto.find(d => {
      const start = d.startDate?.slice(0,10);
      const end = d.endDate?.slice(0,10);
      return start && end && iso >= start && iso <= end;
    }) || null;
  }

}
