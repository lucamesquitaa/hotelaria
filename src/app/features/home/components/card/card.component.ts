import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  item!: Product;

  clickedHeart = false;

  ngOnInit(){
  }

  onClickHeart(){
    this.clickedHeart = !this.clickedHeart;
    console.log(this.clickedHeart)
  }
}
