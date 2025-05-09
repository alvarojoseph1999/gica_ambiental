import { Component, ElementRef, ViewChild } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
@Component({
  selector: 'app-login',
  imports: [
    InputTextModule,
    ButtonModule,
    PasswordModule,
    FormsModule,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export default class LoginComponent {
  email: string = '';
  password: string = '';
  @ViewChild('containerRef') container!: ElementRef<HTMLDivElement>;

  constructor(private router: Router, private http: HttpClient) {}

  submit() {
    // 🔐 Validación temporal para pruebas: admin / admin
    if (this.email === 'admin' && this.password === 'admin') {
      // Redireccionar al dashboard
      this.router.navigate(['./dashboard']);
    } else {
      // 👇 Aquí iría la conexión con Laravel usando JSON
      /*
      const loginData = {
        email: this.email,
        password: this.password,
      };

      this.http.post('http://localhost:8000/api/login', loginData)
        .subscribe(
          (response: any) => {
            // Aquí podrías guardar el token y redirigir
            localStorage.setItem('token', response.token);
            this.router.navigate(['/dashboard']);
          },
          (error) => {
            console.error('Error de autenticación:', error);
          }
        );
      */
      alert('Usuario o contraseña incorrectos');
    }
  }

  activateRegister(): void {
    this.container.nativeElement.classList.add('active');
  }

  activateLogin(): void {
    this.container.nativeElement.classList.remove('active');
  }
}
