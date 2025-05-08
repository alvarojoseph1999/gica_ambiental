import { Component } from '@angular/core';

// Importaciones necesarias

import { ButtonModule } from 'primeng/button'; // ✅ Importa el módulo de botones de PrimeNG
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
interface Profesional {
  nombre: string;
  categoria: string;
  imagen: string;
  descripcion: string;
}
@Component({
  selector: 'app-teamjob',
  imports: [ButtonModule, CommonModule],
  templateUrl: './teamjob.component.html',
  styleUrl: './teamjob.component.css',
})
export default class TeamjobComponent {
  constructor(private router: Router) {}
  irADetalle() {
    this.router.navigate(['/team']);
  }
  categorias: string[] = [
    'Todos',
    'Direccion',
    'Investigadores',
    'Profesionales',
    'Administrativos',
  ];
  categoriaSeleccionada: string = 'Todos';

  profesionales: Profesional[] = [
    {
      nombre: 'Pepe Peres Pamela',
      categoria: 'Direccion',
      imagen: 'assets/ceo.jpg',
      descripcion: 'Líder del equipo',
    },
    {
      nombre: 'Ambienta Ambiental',
      categoria: 'Investigadores',
      imagen: 'assets/ceo.jpg',
      descripcion: 'Especialista en medio ambiente',
    },
    {
      nombre: 'Carlos Mendoza',
      categoria: 'Profesionales',
      imagen: 'assets/ceo.jpg',
      descripcion: 'Ingeniero de software',
    },
    {
      nombre: 'María Torres',
      categoria: 'Administrativos',
      imagen: 'assets/ceo.jpg',
      descripcion: 'Coordinadora de proyectos',
    },
  ];

  get profesionalesFiltrados(): Profesional[] {
    if (this.categoriaSeleccionada === 'Todos') {
      return this.profesionales;
    }
    return this.profesionales.filter(
      (profesional) => profesional.categoria === this.categoriaSeleccionada
    );
  }

  cambiarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }
}
