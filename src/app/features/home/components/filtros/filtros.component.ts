import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent{
  @Input()
  category!: any[];

  @Output()
  categorySelected = new EventEmitter<string>();

  home = "Todos";

  onClickCategory(categoryName: any){
    this.categorySelected.emit(categoryName);
  }
}
