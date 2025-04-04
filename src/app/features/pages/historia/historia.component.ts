import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historia',
  imports: [CardModule, CommonModule],
  templateUrl: './historia.component.html',
  styleUrl: './historia.component.css',
})
export default class HistoriaComponent {}
