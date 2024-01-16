import { Component } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component.base';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ComponentBase {
  override onReceiveLiterals(): void {
  }
  products = [
    {
      image: 'src/assets/logoteste.png',
      name: 'play 4',
      category: 'videogames',
      price: 1200
    },
    {
      image: 'src/assets/logoteste.png',
      name: 'play 5',
      category: 'alt',
      price: 1200
    },
    {
      image: 'src/assets/logoteste.png',
      name: 'play 5',
      category: 'camera',
      price: 1200
    },
    {
      image: 'src/assets/logoteste.png',
      name: 'play 6',
      category: 'videogames',
      price: 1200
    },
    {
      image: 'src/assets/logoteste.png',
      name: 'play 78',
      category: 'videogames',
      price: 1200
    },
    {
      image: 'src/assets/logoteste.png',
      name: 'play 9',
      category: 'teste',
      price: 1200
    },
    {
      image: 'src/assets/logoteste.png',
      name: 'play 10',
      category: 'videogames',
      price: 1200
    }
  ]

}
