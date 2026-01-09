import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

function toInteger(value: any): number {
  return parseInt(`${value}`, 10);
}

function isNumber(value: any): boolean {
  return !isNaN(toInteger(value));
}

function padNumber(value: number | null | undefined): string {
  if (!isNumber(value)) {
    return '';
  }
  return `0${value}`.slice(-2);
}

@Injectable()
export class BrNgbDateParserFormatter extends NgbDateParserFormatter {
  // Parses dd/MM/yyyy into NgbDateStruct
  parse(value: string | null): NgbDateStruct | null {
    if (!value) {
      return null;
    }
    const parts = value.trim().split(/[\/\-.]/);
    if (parts.length !== 3) {
      return null;
    }
    const day = toInteger(parts[0]);
    const month = toInteger(parts[1]);
    const year = toInteger(parts[2]);

    if (isNumber(day) && isNumber(month) && isNumber(year)) {
      return { day, month, year } as NgbDateStruct;
    }
    return null;
  }

  // Formats NgbDateStruct into dd/MM/yyyy
  format(date: NgbDateStruct | null): string {
    if (!date) {
      return '';
    }
    const dd = padNumber(date.day);
    const mm = padNumber(date.month);
    const yyyy = date.year;
    return `${dd}/${mm}/${yyyy}`;
  }
}
