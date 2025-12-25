import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);
  private platformId = inject(PLATFORM_ID);

  /* ================= REGISTER (Firebase) ================= */
  register(email: string, password: string) {
    if (!isPlatformBrowser(this.platformId)) {
      return Promise.reject('Auth not available on server');
    }
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  /* ================= LOGIN (Admin + Firebase) ================= */
  async login(username: string, password: string): Promise<boolean> {
    if (!isPlatformBrowser(this.platformId)) return false;

    //DEFAULT ADMIN LOGIN
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      return true;
    }

    try {
      await signInWithEmailAndPassword(this.auth, username, password);
      return true;
    } catch {
      return false;
    }
  }
  logout() {
    localStorage.removeItem('isAdmin');
    signOut(this.auth);
  }

  /* ================= AUTH CHECK ================= */
  isLoggedIn(): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;

    // Firebase user
    if (this.auth.currentUser) return true;

    // Admin user
    return localStorage.getItem('isAdmin') === 'true';
  }

  /* ================= CURRENT USER ================= */
  getCurrentUser() {
    return this.auth.currentUser;
  }
}
