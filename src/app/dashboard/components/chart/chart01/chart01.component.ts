import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { ApexOptions } from 'apexcharts';

@Component({
  selector: 'app-chart01',
  imports: [],
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
  public chartOptions: ApexOptions = {
    chart: {
      height: '100%',

      type: 'area',
      fontFamily: 'Inter, sans-serif',
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: '#1C64F2',
        gradientToColors: ['#1C64F2'],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0,
      },
    },
    series: [
      {
        name: 'New users',
        data: [6500, 6418, 6456, 6526, 6356, 6456],
        color: '#1A56DB',
      },
    ],
    xaxis: {
      categories: [
        '01 February',
        '02 February',
        '03 February',
        '04 February',
        '05 February',
        '06 February',
        '07 February',
      ],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  };
}
