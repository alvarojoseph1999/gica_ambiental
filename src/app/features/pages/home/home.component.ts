import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-home',
  imports: [CommonModule, CardModule, ButtonModule, ChartModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {
  titulo = 'HOLA MUNDO';
  subtitulo = 'HOLA';
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  teamMembers = [
    {
      name: 'Ambienta Ambiental',
      role: 'Lorem ipsum dolor sit amet',
      image: 'assets/Investigador.jpg',
    },
    {
      name: 'Ambienta Ambiental',
      role: 'Lorem ipsum dolor sit amet',
      image: 'assets/Investigador.jpg',
    },
    {
      name: 'Ambienta Ambiental',
      role: 'Lorem ipsum dolor sit amet',
      image: 'assets/Investigador.jpg',
    },
  ];

  chartData: any;
  chartOptions: any;

  news = [
    {
      title: "Don't destroy greenery and don’t spoil scenerycenery",
      description:
        'Lorem ipsum dolor sit amet, consectetur  adipiscing elitadipiscing.',
      image: 'assets/logo_gica.jpg',
    },
    {
      title: 'Is climate change happening faster than expected?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elitasdasd.',
      image: 'assets/logo_gica.jpg',
    },
    {
      title: 'Top 10 facts about wind farms you didn’t ’t know know know know',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'assets/logo_gica.jpg',
    },
    {
      title: 'Our goal is to make water available for everyone',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'assets/logo_gica.jpg',
    },
  ];

  constructor() {
    this.chartData = {
      labels: [
        '40% Ambiental',
        '35% Ambiental',
        '10% Ambiental',
        '10% Ambiental',
        '5% Ambiental',
      ],
      datasets: [
        {
          data: [40, 35, 10, 10, 5],
          backgroundColor: [
            '#64dd17',
            '#9575cd',
            '#ffeb3b',
            '#ff9800',
            '#e57373',
          ],
        },
      ],
    };

    this.chartOptions = {
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#FFFFFF', // Hace que las letras de la gráfica sean blancas
          },
        },
      },
    };
  }
}
