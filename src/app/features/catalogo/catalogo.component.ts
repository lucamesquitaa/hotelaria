import { Component } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component.base';

@Component({
  selector: 'app-catalogo',
  standalone: false,
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent extends ComponentBase{
  cafeterias = [
    { id: "123", name: 'Café do Mercado', description: 'Centro', image: "https://perfectdailygrind.com/pt/wp-content/uploads/sites/5/2021/11/WhatsApp-Image-2021-11-03-at-15.46.47-3-edited.jpeg" },
    { id: "124", name: 'Café da Praça', description: 'Jardim', image: "https://images.squarespace-cdn.com/content/v1/606c6f7eb1c93132f0bed4e6/1645538391593-ZT1K6ZJYJ2UNVNX0TTH0/bonomi.jpeg" },
    { id: "125", name: 'Café Gourmet', description: 'Zona Sul', image: "https://quantocustaviajar.com/blog/wp-content/uploads/2023/01/foto-casa-granu.png" },
    { id: "126", name: 'Café Artesanal', description: 'Zona Norte', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjgED9CVV-iuo8z-3RjfuWDO0b9MbvMNoPPg&s" }
  ];


  onCafeteriaClick(cafeteria: any) {
    this.router.navigate(['/cafeteria', cafeteria.id]); 
    
  }
}
