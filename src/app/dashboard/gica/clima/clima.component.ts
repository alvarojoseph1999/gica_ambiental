import { Component } from '@angular/core';
import { MetricGroup01Component } from '../../components/metric-group/metric-group01/metric-group01.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-clima',
  imports: [MetricGroup01Component, RouterModule, CommonModule],
  templateUrl: './clima.component.html',
  styleUrl: './clima.component.css',
})
export class ClimaComponent {}
