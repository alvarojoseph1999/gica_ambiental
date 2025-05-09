import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './../../layout/footer/footer.component';
import { NavbarComponent } from './../../layout/navbar/navbar.component';
import {
  Router,
  NavigationEnd,
  NavigationStart,
  NavigationError,
} from '@angular/router';
import { LoadingComponent } from './../../loading/loading.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common'; // Importa CommonModule
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    RouterOutlet,
    ButtonModule,
    CommonModule,
    LoadingComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  isLoading = false; // Asegurar que inicie en false
  isDashboard: boolean = false;
  isHome: boolean = false;
  navbarHeight: number = 0;
  showNav = true;
  @ViewChild('navbar') navbar: ElementRef | undefined;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const isDashboardRoute =
          event.urlAfterRedirects.startsWith('/dashboard');
        this.showNav = !isDashboardRoute;
        this.isDashboard = isDashboardRoute;
        // Limpiamos las clases primero
        document.body.classList.remove('with-navbar', 'no-navbar');
        // Cambiar clases del body
        if (this.isDashboard) {
          document.body.classList.add('no-navbar');
        } else {
          document.body.classList.add('with-navbar');
        }
      }
    });
  }

  ngOnInit(): void {
    // Establece el estado de carga inicialmente en verdadero
    this.isLoading = true;

    // Escucha los eventos del router para manejar la carga
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      }

      if (event instanceof NavigationEnd || event instanceof NavigationError) {
        // Solo desactivamos el loading después de que el contenido se haya cargado
        setTimeout(() => {
          this.isLoading = false;
          this.isDashboard = this.checkIfDashboard();
          this.updateBodyClasses();
        }, 500); // Puedes ajustar el tiempo si es necesario
      }
    });

    // Verifica si estamos en el dashboard para el estado inicial
    this.isDashboard = this.checkIfDashboard();

    // Maneja el estado del navbar en la primera carga
    this.showNav = !this.isDashboard;
    this.updateBodyClasses();

    // Inicializa isHome en el primer renderizado
    this.isHome = this.checkIfHome(window.location.pathname);

    // Luego escucha los cambios de ruta para actualizar isHome
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHome = this.checkIfHome(event.urlAfterRedirects);
      }
    });
    // Calcular la altura del navbar después de que se renderice
    setTimeout(() => {
      this.isLoading = false;
      this.updateBodyClasses(); // Cambiar a false para ocultar el loader
      if (this.navbar) {
        this.navbarHeight = this.navbar.nativeElement.offsetHeight;
      }
    }, 1000);
    // Aquí puedes agregar lógica para detectar si estás en el dashboard, por ejemplo:
    this.isDashboard = this.checkIfDashboard();
  }
  // Método reutilizable para verificar si es home
  checkIfHome(path: string): boolean {
    const cleanPath = path.replace(/\/+$/, ''); // Elimina cualquier slash al final
    return (
      cleanPath === '' || cleanPath === '/home' || cleanPath === '/contact'
    );
  }
  updateBodyClasses() {
    // Solo actualizar clases cuando el loading terminó
    if (!this.isLoading) {
      document.body.classList.remove('with-navbar', 'no-navbar');

      if (this.isDashboard) {
        document.body.classList.add('no-navbar');
      } else {
        document.body.classList.add('with-navbar');
      }
    }
  }
  // Método de ejemplo para determinar si estamos en el Dashboard
  checkIfDashboard(): boolean {
    return window.location.pathname.includes('dashboard');
  }

  // isLoading = false;
  // isDashboard = false;
  // isHome = false;
  // navbarHeight = 0;
  // showNav = true;
  // @ViewChild('navbar') navbar: ElementRef | undefined;

  // constructor(private router: Router) {
  //   // Suscripción para manejar estados de navegación
  //   this.router.events.subscribe((event: any) => {
  //     if (event instanceof NavigationEnd) {
  //       // Solo NavigationEnd tiene urlAfterRedirects
  //       this.updateRouteStates(event.urlAfterRedirects);
  //       this.updateBodyClasses();
  //     }
  //   });
  // }

  // ngOnInit(): void {
  //   // Establece el estado de carga inicialmente en verdadero
  //   this.isLoading = true;

  //   // Verifica si estamos en el dashboard para el estado inicial
  //   this.updateRouteStates(window.location.pathname);

  //   // Maneja los cambios de ruta para cargar correctamente
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationStart) {
  //       this.isLoading = true;
  //     }

  //     if (event instanceof NavigationEnd) {
  //       setTimeout(() => {
  //         this.isLoading = false;
  //         this.updateRouteStates(event.urlAfterRedirects);
  //         this.updateBodyClasses();
  //       }, 3000); // Puedes ajustar el tiempo si es necesario
  //     }

  //     // Para errores, simplemente desactiva el loader
  //     if (event instanceof NavigationError) {
  //       this.isLoading = false;
  //       this.updateBodyClasses();
  //     }
  //   });

  //   // Calcular la altura del navbar después de que se renderice
  //   setTimeout(() => {
  //     if (this.navbar) {
  //       this.navbarHeight = this.navbar.nativeElement.offsetHeight;
  //     }
  //   }, 2000);
  // }

  // // Actualiza los estados según la ruta actual
  // private updateRouteStates(path: string): void {
  //   const cleanPath = path.replace(/\/+$/, ''); // Elimina cualquier slash al final
  //   this.isDashboard = cleanPath.startsWith('/dashboard');
  //   this.showNav = !this.isDashboard;
  //   this.isHome =
  //     cleanPath === '' || cleanPath === '/home' || cleanPath === '/contact';
  // }

  // // Método de ejemplo para determinar si estamos en el Dashboard
  // checkIfDashboard(): boolean {
  //   return window.location.pathname.includes('dashboard');
  // }

  // // Actualiza las clases del body para manejar los estilos globales
  // private updateBodyClasses(): void {
  //   document.body.classList.remove('with-navbar', 'no-navbar');

  //   if (this.isDashboard) {
  //     document.body.classList.add('no-navbar');
  //   } else {
  //     document.body.classList.add('with-navbar');
  //   }
  // }
}
