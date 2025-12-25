import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../Services/auth-service';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { authGuard } from '../auth-guard';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true,
})
export class Login {
  username = '';
  password = '';
  isValidLogin: boolean = false;

  constructor(private auth: AuthService, private router: Router) {}
  async login() {
    if (await this.auth.login(this.username, this.password)) {
      this.isValidLogin = true;
      const redirectUrl = localStorage.getItem('redirectAfterLogin') || '/home';
      localStorage.removeItem('redirectAfterLogin');
      this.router.navigateByUrl(redirectUrl);
    } else {
      console.log('Invalid username or password');
    }
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
