import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map01',
  imports: [NgClass, CommonModule],
  templateUrl: './map01.component.html',
  styleUrl: './map01.component.css',
})
export class Map01Component {
  openDropDown: boolean = false;
}
