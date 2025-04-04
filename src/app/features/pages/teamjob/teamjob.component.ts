import { Component } from '@angular/core';

// Importaciones necesarias

import { ButtonModule } from 'primeng/button'; // ✅ Importa el módulo de botones de PrimeNG
import { CommonModule } from '@angular/common';

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
      imagen: 'assets/img1.jpg',
      descripcion: 'Líder del equipo',
    },
    {
      nombre: 'Ambienta Ambiental',
      categoria: 'Investigadores',
      imagen: 'assets/img2.jpg',
      descripcion: 'Especialista en medio ambiente',
    },
    {
      nombre: 'Carlos Mendoza',
      categoria: 'Profesionales',
      imagen: 'assets/img3.jpg',
      descripcion: 'Ingeniero de software',
    },
    {
      nombre: 'María Torres',
      categoria: 'Administrativos',
      imagen: 'assets/img4.jpg',
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
