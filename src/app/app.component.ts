import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { Router, NavigationEnd } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FooterComponent,
    NavbarComponent,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ambiental';
  isLoading = false; // Asegurar que inicie en false

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // La página ya terminó de cargar, aseguramos que el footer se muestre
        this.isLoading = false;
      }
    });
  }
}
