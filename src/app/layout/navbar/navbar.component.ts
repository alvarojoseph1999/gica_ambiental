import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar'; // Importa el módulo de Menubar
import { SidebarModule } from 'primeng/sidebar'; // Importa el módulo de Sidebar
import { ButtonModule } from 'primeng/button'; // Si usas botones de PrimeNG
import { MenuModule } from 'primeng/menu'; // Para usar p-menu
import { RouterModule } from '@angular/router';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    MenubarModule,
    SidebarModule,
    ButtonModule,
    MenuModule,
    RouterModule,
    BadgeModule,
    AvatarModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false; // Controla la visibilidad del menú lateral
  items: MenuItem[] | undefined;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        badge: '3',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            shortcut: '⌘+B',
          },
          {
            separator: true,
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U',
          },
        ],
      },
    ];
  }
  isDarkMode = false;
  isMobileMenuOpen = false;
  constructor() {
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.applyTheme();
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  applyTheme() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  // get darkModeIcon() {
  //   return this.isDarkMode
  //     ? `<svg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' /></svg>`
  //     : `<svg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' /></svg>`;
  // }
}
