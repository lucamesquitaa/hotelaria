import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  standalone: false,
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss',
  animations: [
    trigger('collapseExpand', [
      state('expanded', style({
        height: '*',
        width: '280px',
        opacity: 1,
        visibility: 'visible'
      })),
      state('collapsed', style({
        height: '0px',
        width: '0px',
        opacity: 0,
        visibility: 'hidden'
      })),
      transition('expanded <=> collapsed', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class MenubarComponent implements OnInit {
  isOpen = true;

  ngOnInit() {
    if(window.innerWidth < 768) {
      this.isOpen = false;
    }
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
