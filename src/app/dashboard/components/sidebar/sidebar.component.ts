import { Component } from '@angular/core';
import { SidebarService } from '../../../services/sidebar.service';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  selected: string = '';

  toggleSelected(item: string): void {
    this.selected = this.selected === item ? '' : item;
  }
  // Navega a una subpágina (como ecommerce)
  selectedMenu: string | null = null;

  toggleMenu(menu: string) {
    this.selectedMenu = this.selectedMenu === menu ? null : menu;
  }

  isSelected(item: string): boolean {
    return this.selected === item;
  }
  isSidebarOpen: boolean = false;

  isSidebarCompact = false; // 👈 modo compacto cuando es true

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.sidebarState$.subscribe((state) => {
      this.isSidebarCompact = !state; // si el sidebar está cerrado, mostramos solo el logo
    });
  }

  page: string = '';
  sidebarToggle: boolean = false;

  // Cambia la selección del menú
  toggleSelecteds(menu: string): void {
    this.selected = this.selected === menu ? '' : menu;
  }

  // Navega a una subpágina (como ecommerce)
  navigateToPage(subPage: string): void {
    this.page = subPage;

    // Aquí podrías redireccionar a otra ruta si usas Angular Router
    // this.router.navigate(['/dashboard', subPage]);
  }
}
