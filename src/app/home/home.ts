// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../Services/auth-service';

// import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-home',
//   imports: [FormsModule],
//   templateUrl: './home.html',
//   styleUrl: './home.css',
//   standalone: true,
// })
// export class Home implements OnInit {
//   token: string | null = null;

//   constructor(public auth: AuthService) {}

//   ngOnInit(): void {
//     this.token = this.auth.getToken();
//   }
// }

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true,
})
export class Home implements OnInit {
  isLoggedIn = false;

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
