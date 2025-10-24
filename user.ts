import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  constructor(private router: Router) {}

  irHome() {
    this.router.navigate(['/home']);
  }
  irRoutines() {
    this.router.navigate(['/routines']);
  }
  irComunidad() {
    this.router.navigate(['/comunidad']);
  }    
  irRedApoyo() {
    this.router.navigate(['/red-apoyo']);
  }  
  irUser() {
    this.router.navigate(['/user']);
  }    
}
