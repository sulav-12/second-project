import { Component } from '@angular/core';
import { AuthService } from '../Services/auth-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  async register() {
    try {
      await this.auth.register(this.username, this.password);
      this.auth.logout();

      alert('Registration successful! Please login.');
      this.router.navigate(['/login']);
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Email already exists');
      } else if (err.code === 'auth/weak-password') {
        alert('Password must be at least 6 characters');
      } else {
        alert(err.message);
      }
    }
  }

  switchToLogin() {
    this.router.navigate(['/login']);
  }
}
