import { Component } from '@angular/core';
//import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { HeaderComponent } from './components/header/header.component';
// import { OverlayComponent } from './components/overlay/overlay.component';
import { MetricGroup01Component } from './components/metric-group/metric-group01/metric-group01.component';
import { Map01Component } from './components/map/map01/map01.component';
import { Table01Component } from './components/table/table01/table01.component';
import { Chart01Component } from './components/chart/chart01/chart01.component';
import { Chart02Component } from './components/chart/chart02/chart02.component';
import { Chart03Component } from './components/chart/chart03/chart03.component';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router'; // Importa RouterModule

import { SidebarComponent } from './shared/component/sidebar/sidebar.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { OverlayComponent } from './shared/component/overlay/overlay.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    // SidebarComponent,
    // HeaderComponent,
    // OverlayComponent,
    // MetricGroup01Component,
    // Map01Component,
    // Table01Component,
    // Chart01Component,
    // Chart02Component,
    // Chart03Component,
    CommonModule,
    RouterModule,
    RouterOutlet,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export default class DashboardComponent {}

// <div class="flex h-screen overflow-hidden">
//   <!-- Sidebar  -->
//   <app-sidebar />

//   <!-- Content Area  -->
//   <div class="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
//     <!-- Overlay for small devices  -->
//     <app-overlay></app-overlay>

//     <!-- Header  -->
//     <app-header></app-header>

//     <!-- Main Content  -->
//     <main>
//       <router-outlet></router-outlet>
//       <!-- Aquí se renderiza dashboard-principal, clima, etc. -->
//     </main>
//   </div>
// </div>
