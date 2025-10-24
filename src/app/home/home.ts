import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [FormsModule], 
  styleUrls: ['./home.css'],
})
export class Home{
  email: string = '';
  password: string = '';

  // Usuario simulado
  user = {
    email: 'user@gmail.com',
    password: 'user123',
  };

  constructor(private router: Router) {}

  // Función para iniciar sesión
  login() {
    if (this.email === this.user.email && this.password === this.user.password) {
      // Si es correcto, ir a Home
      this.router.navigate(['/user']);
    } else {
      // Si no, alerta o mensaje
      alert('Correo o contraseña incorrectos');
    }
  }

  // Ir a registro
  irRecord() {
    this.router.navigate(['/record']); // asumiendo que tienes ruta de registro
  }
}
