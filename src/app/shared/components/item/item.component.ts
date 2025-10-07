import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: false,
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input("cafeteria") cafeteria: any;
}
