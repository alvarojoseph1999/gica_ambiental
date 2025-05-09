import { Component, Input, OnInit, HostListener } from '@angular/core';
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

import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
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
  isDarkMode = false;
  isMobileMenuOpen = false;
  isSubMenuOpen = false;
  isScrolled = false;
  isHomePage: boolean = false;

  @Input() isHome: boolean = false;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const section = document.querySelector('section');
    if (section) {
      const sectionTop = section.getBoundingClientRect().top;
      // Si el top de la sección es negativo (ya se ha desplazado fuera de la vista)
      this.isScrolled = sectionTop < 0;
    }
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    // Si se cierra el menú principal, también cierra el submenu
    if (!this.isMobileMenuOpen) {
      this.isSubMenuOpen = false;
    }
  }
  toggleSubMenu() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }
  constructor(private router: Router) {
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.applyTheme();
  }
  ngOnInit() {
    // Detectar ruta actual y escuchar cambios
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHome = event.urlAfterRedirects === '/' || event.url === '/';
      }
      if (event instanceof NavigationEnd) {
        this.isHomePage =
          event.urlAfterRedirects === '/' ||
          event.urlAfterRedirects === '/home';
      }
    });
    this.checkIfHome(this.router.url);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkIfHome(event.urlAfterRedirects);
      }
    });

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
  checkIfHome(url: string) {
    this.isHome = url === '/' || url === '/home';
    this.isHomePage = url === '/' || url === '/home';
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

  // get darkModeIcon() {
  //   return this.isDarkMode
  //     ? `<svg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' /></svg>`
  //     : `<svg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' /></svg>`;
  // }

  get navbarClasses() {
    if (this.isScrolled) {
      return 'bg-black shadow-md text-black';
    }
    return this.isHome
      ? 'bg-transparent shadow-2xl'
      : 'bg-white shadow-md top-0';
  }
  //! pasodofniagn
  // items: MenuItem[] | undefined;
  // isDarkMode = false;
  // isMobileMenuOpen = false;
  // isSubMenuOpen = false;
  // isScrolled = false;
  // isHomePage = false;

  // @Input() isHome = false;

  // constructor(private router: Router) {
  //   this.isDarkMode = localStorage.getItem('theme') === 'dark';
  //   this.applyTheme();
  // }

  // ngOnInit(): void {
  //   // Comprobar si estamos en la página de inicio al cargar el componente
  //   this.updateNavbarState(this.router.url);

  //   // Escuchar cambios en las rutas
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       this.updateNavbarState(event.urlAfterRedirects);
  //     }
  //   });

  //   // Configurar el menú
  //   this.items = [
  //     {
  //       label: 'Home',
  //       icon: 'pi pi-home',
  //     },
  //     {
  //       label: 'Projects',
  //       icon: 'pi pi-search',
  //       badge: '3',
  //       items: [
  //         {
  //           label: 'Core',
  //           icon: 'pi pi-bolt',
  //           shortcut: '⌘+S',
  //         },
  //         {
  //           label: 'Blocks',
  //           icon: 'pi pi-server',
  //           shortcut: '⌘+B',
  //         },
  //         {
  //           separator: true,
  //         },
  //         {
  //           label: 'UI Kit',
  //           icon: 'pi pi-pencil',
  //           shortcut: '⌘+U',
  //         },
  //       ],
  //     },
  //   ];
  // }

  // @HostListener('window:scroll', ['$event'])
  // onScroll(): void {
  //   // Detecta si se ha hecho scroll para aplicar sombras
  //   this.isScrolled = window.scrollY > 50;
  // }

  // updateNavbarState(url: string): void {
  //   // Verifica si estamos en la página de inicio
  //   this.isHomePage = url === '/' || url === '/home';
  //   this.isHome = this.isHomePage;
  //   this.applyBodyClasses();
  // }

  // applyBodyClasses(): void {
  //   // Ajusta las clases del body según el estado actual
  //   document.body.classList.remove('with-navbar', 'no-navbar');

  //   if (this.isHomePage) {
  //     document.body.classList.add('with-navbar');
  //   } else {
  //     document.body.classList.add('with-navbar');
  //   }
  // }

  // toggleMobileMenu(): void {
  //   this.isMobileMenuOpen = !this.isMobileMenuOpen;

  //   // Si se cierra el menú principal, también cierra el submenu
  //   if (!this.isMobileMenuOpen) {
  //     this.isSubMenuOpen = false;
  //   }
  // }

  // toggleSubMenu(): void {
  //   this.isSubMenuOpen = !this.isSubMenuOpen;
  // }

  // toggleDarkMode(): void {
  //   this.isDarkMode = !this.isDarkMode;
  //   localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  //   this.applyTheme();
  // }

  // applyTheme(): void {
  //   // Aplicar el tema oscuro si está activado
  //   if (this.isDarkMode) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }

  // // get navbarClasses(): string {
  // //   // Devuelve las clases del navbar según el estado
  // //   if (this.isScrolled) {
  // //     return 'bg-white shadow-md text-black';
  // //   }
  // //   return this.isHome
  // //     ? 'bg-transparent shadow-2xl text-white'
  // //     : 'bg-white shadow-md text-black';
  // // }
  // get navbarClasses() {
  //   if (this.isScrolled) {
  //     return 'bg-black shadow-md text-black';
  //   }
  //   return this.isHome
  //     ? 'bg-transparent shadow-2xl'
  //     : 'bg-white shadow-md top-0';
  // }
}
