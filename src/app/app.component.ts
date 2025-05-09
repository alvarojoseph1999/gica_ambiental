import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {
  Router,
  NavigationEnd,
  NavigationStart,
  NavigationError,
} from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // ✅ la nueva forma

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // FooterComponent,
    // NavbarComponent,
    ButtonModule,
    CommonModule,
    // LoadingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ambiental';
  // isLoading = false; // Asegurar que inicie en false
  // isDashboard: boolean = false;
  // isHome: boolean = false;
  // navbarHeight: number = 0;
  // showNav = true;
  // isLoading: boolean = true; // Controlar el estado de carga
  // @ViewChild('navbar') navbar: ElementRef | undefined;

  // constructor(private router: Router) {
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       const isDashboardRoute =
  //         event.urlAfterRedirects.startsWith('/dashboard');
  //       this.showNav = !isDashboardRoute;
  //       this.isDashboard = isDashboardRoute;
  //       // Limpiamos las clases primero
  //       document.body.classList.remove('with-navbar', 'no-navbar');
  //       // Cambiar clases del body
  //       if (this.isDashboard) {
  //         document.body.classList.add('no-navbar');
  //       } else {
  //         document.body.classList.add('with-navbar');
  //       }
  //     }
  //   });
  // }
  // updateBodyClasses() {
  //   // Solo actualizar clases cuando el loading terminó
  //   if (!this.isLoading) {
  //     document.body.classList.remove('with-navbar', 'no-navbar');

  //     if (this.isDashboard) {
  //       document.body.classList.add('no-navbar');
  //     } else {
  //       document.body.classList.add('with-navbar');
  //     }
  //   }
  // }
  // ngOnInit(): void {
  //   // Escuchar los eventos de navegación del router
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationStart) {
  //       // Iniciar el loader cuando empieza la navegación
  //       this.isLoading = true;
  //     }
  //     // Aquí puedes añadir tu lógica para determinar si estamos en el Dashboard
  //     // this.isDashboard = window.location.pathname.includes('dashboard');
  //     if (event instanceof NavigationEnd || event instanceof NavigationError) {
  //       // Detener el loader cuando la navegación termine o haya un error
  //       setTimeout(() => {
  //         this.isLoading = false;
  //         // Asegurarse de que el navbar tenga la sombra aunque esté cargando
  //         this.isDashboard = window.location.pathname.includes('dashboard');
  //         document.body.classList.remove('with-navbar', 'no-navbar');

  //         if (this.isDashboard) {
  //           // Dashboard NO debe tener padding
  //           document.body.classList.add('no-navbar');
  //         } else {
  //           // Otras rutas sí deben tener padding
  //           document.body.classList.add('with-navbar');
  //         }
  //       }, 2000); // Retrasar un poco el fin de la carga para dar tiempo al loader a mostrarse
  //     }
  //   });

  //   // Puedes también comprobar si estamos en el Dashboard
  //   this.isDashboard = this.checkIfDashboard();

  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       this.isHome =
  //         event.urlAfterRedirects === '/' ||
  //         event.urlAfterRedirects === '/home' ||
  //         event.urlAfterRedirects === '/contact';
  //     }
  //   });

  //   // Calcular la altura del navbar después de que se renderice
  //   setTimeout(() => {
  //     this.isLoading = false;
  //     this.updateBodyClasses(); // Cambiar a false para ocultar el loader
  //     if (this.navbar) {
  //       this.navbarHeight = this.navbar.nativeElement.offsetHeight;
  //     }
  //   }, 1000);
  //   // Aquí puedes agregar lógica para detectar si estás en el dashboard, por ejemplo:
  //   this.isDashboard = this.checkIfDashboard();
  // }
  // // Método de ejemplo para determinar si estamos en el Dashboard
  // checkIfDashboard(): boolean {
  //   return window.location.pathname.includes('dashboard');
  // }

  // // Método para obtener la clase CSS para el margen superior (ajusta según sea necesario)

  // getMarginTopClass(): string {
  //   if (!this.showNav) {
  //     return 'mt-0'; // No navbar, no margen
  //   }
  //   if (this.isHome) {
  //     return '-mt-[50px]'; // En home
  //   }
  //   return 'mt-[80px]'; // En otras páginas normales
  // }
}
