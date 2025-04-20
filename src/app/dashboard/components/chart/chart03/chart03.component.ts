import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-chart03',
  imports: [NgClass],
  templateUrl: './chart03.component.html',
  styleUrl: './chart03.component.css',
})
export class Chart03Component {
  selected: 'overview' | 'sales' | 'revenue' = 'overview';
}
