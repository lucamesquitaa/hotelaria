import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent {
  @Input()
  category!: any;

  onClickCategory(categoryName: any){
    //this.filteredItens = [];

    //if(categoryName == 'all'){
    //  this.filteredItens = this.itens;
//   return;
   // }
   // console.log(categoryName)
   // this.filteredItens = this.itens.filter(x => x.category == categoryName);
  }
}
