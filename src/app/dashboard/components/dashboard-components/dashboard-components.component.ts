import { Component } from '@angular/core';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { HeaderComponent } from './header/header.component';
// import { OverlayComponent } from './overlay/overlay.component';
import { MetricGroup01Component } from './../metric-group/metric-group01/metric-group01.component';
import { Map01Component } from './../map/map01/map01.component';
import { Table01Component } from './../table/table01/table01.component';
import { Chart01Component } from './../chart/chart01/chart01.component';
import { Chart02Component } from './../chart/chart02/chart02.component';
import { Chart03Component } from './../chart/chart03/chart03.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard-components',
  imports: [
    MetricGroup01Component,
    Map01Component,
    Table01Component,
    Chart01Component,
    Chart02Component,
    Chart03Component,
    CommonModule,
  ],
  templateUrl: './dashboard-components.component.html',
  styleUrl: './dashboard-components.component.css',
})
export default class DashboardComponentsComponent {}
