import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../Services/auth-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  standalone: true,
})
export class Navbar implements OnInit {
  showLogin = true;
  showRegister = false;
  token: string | null = null;

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    // this.token = this.auth.getToken();
  }
  logout() {
    this.auth.logout();
    this.token = null;
    this.router.navigate(['/login']);
  }
}
