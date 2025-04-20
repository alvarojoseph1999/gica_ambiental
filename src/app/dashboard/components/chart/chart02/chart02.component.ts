import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-chart02',
  imports: [NgClass, NgIf],
  templateUrl: './chart02.component.html',
  styleUrl: './chart02.component.css',
})
export class Chart02Component {
  openDropDown = false;

  onOutsideClick(event: Event) {
    const targetElement = event.target as HTMLElement;
    const dropdownElement = document.querySelector('.relative.h-fit'); // Selecciona el contenedor del dropdown

    if (dropdownElement && !dropdownElement.contains(targetElement)) {
      this.openDropDown = false;
    }
  }
}
