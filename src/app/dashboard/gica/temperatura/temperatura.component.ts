import { Component } from '@angular/core';
import { MetricGroup01Component } from '../../components/metric-group/metric-group01/metric-group01.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-temperatura',
  imports: [MetricGroup01Component, RouterModule, CommonModule],
  templateUrl: './temperatura.component.html',
  styleUrl: './temperatura.component.css',
})
export class TemperaturaComponent {}
