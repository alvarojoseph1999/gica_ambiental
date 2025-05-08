import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricGroup01Component } from '../../components/metric-group/metric-group01/metric-group01.component';
import { SidebarComponent } from '../../shared/component/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/component/header/header.component';
import { OverlayComponent } from '../../shared/component/overlay/overlay.component';

import { RouterModule, RouterOutlet } from '@angular/router'; // Importa RouterModule
@Component({
  standalone: true,
  selector: 'app-gica-dashboard',
  imports: [
    // MetricGroup01Component,
    SidebarComponent,
    HeaderComponent,
    OverlayComponent,
    RouterOutlet,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './gica-dashboard.component.html',
  styleUrl: './gica-dashboard.component.css',
})
export class GicaDashboardComponent {}
