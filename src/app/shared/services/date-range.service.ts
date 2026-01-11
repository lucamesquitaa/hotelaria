import { Injectable, signal } from '@angular/core';

export interface DateRange {
  startDate: string;
  endDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class DateRangeService {
  private dateRange = signal<DateRange>({ startDate: '', endDate: '' });

  // Getter para ler o sinal
  getDateRange = this.dateRange.asReadonly();

  // Setter para atualizar as datas
  setDateRange(startDate: string, endDate: string): void {
    this.dateRange.set({ startDate, endDate });
  }

  // Método alternativo para atualizar individualmente
  updateStartDate(startDate: string): void {
    this.dateRange.update(current => ({ ...current, startDate }));
  }

  updateEndDate(endDate: string): void {
    this.dateRange.update(current => ({ ...current, endDate }));
  }

  // Limpar as datas
  clearDateRange(): void {
    this.dateRange.set({ startDate: '', endDate: '' });
  }

  getAllDatesBetween(): Array<{ label: string; iso: string }> {
    const dates: Array<{ label: string; iso: string }> = [];
    const { startDate, endDate } = this.dateRange();

    if (!startDate || !endDate) return dates;

    const parseISO = (s: string): Date | null => {
      if (!s) return null;
      const str = s.trim();

      // If datetime provided, take only the date part before T (or before space)
      let datePart = str;
      if (str.includes('T')) datePart = str.slice(0, 10);
      else if (str.includes(' ')) datePart = str.split(' ')[0];

      const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;
      const ddmmyyyyRegex = /^\d{2}\/\d{2}\/\d{4}$/;

      if (isoDateRegex.test(datePart)) {
        const [y, mm, d] = datePart.split('-').map(Number);
        const dt = new Date(y, mm - 1, d);
        return isNaN(dt.getTime()) ? null : dt;
      }

      if (ddmmyyyyRegex.test(datePart)) {
        const [d, mm, y] = datePart.split('/').map(Number);
        const dt = new Date(y, mm - 1, d);
        return isNaN(dt.getTime()) ? null : dt;
      }

      // Fallback: parse full string and normalize to a date-only value (local)
      const parsed = new Date(str);
      if (isNaN(parsed.getTime())) return null;
      const dt = new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
      return isNaN(dt.getTime()) ? null : dt;
    };

    const start = parseISO(startDate);
    const end = parseISO(endDate);
    if (!start || !end) return dates;
    if (start > end) return dates;

    for (let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
      const year = dt.getFullYear();
      const month = String(dt.getMonth() + 1).padStart(2, '0');
      const day = String(dt.getDate()).padStart(2, '0');
      dates.push({ label: `${day}/${month}`, iso: `${year}-${month}-${day}` });
    }

    return dates;
  }
}