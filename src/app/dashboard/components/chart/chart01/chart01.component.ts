import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-chart01',
  imports: [NgClass, NgIf],
  templateUrl: './chart01.component.html',
  styleUrl: './chart01.component.css',
})
export class Chart01Component {
  openDropDown = false;

  onOutsideClick(event: Event) {
    const targetElement = event.target as HTMLElement;
    const dropdownElement = document.querySelector('.relative.h-fit'); // Selecciona el contenedor del dropdown

    if (dropdownElement && !dropdownElement.contains(targetElement)) {
      this.openDropDown = false;
    }
  }
}
