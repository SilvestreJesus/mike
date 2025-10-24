import { Component } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-record',
  imports: [],
  templateUrl: './record.html',
  styleUrl: './record.css',
})
export class Record {
  constructor(private router: Router) {}

  irHome() {
    this.router.navigate(['/home']);
  }
}
