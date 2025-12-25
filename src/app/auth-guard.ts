// import { inject } from '@angular/core';
// import {
//   CanActivateFn,
//   Router,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
// } from '@angular/router';
// import { AuthService } from './Services/auth-service';

// export const authGuard: CanActivateFn = (
//   _route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ): boolean => {
//   const authService = inject(AuthService);
//   const router = inject(Router);
//   const url = state.url;

//   if (typeof window === 'undefined') {
//     return true;
//   }

//   if (authService.isLoggedIn()) {
//     return true;
//   }

//   localStorage.setItem('redirectAfterLogin', url);
//   router.navigate(['/login']);
//   return false;
// };

import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './Services/auth-service';

export const authGuard: CanActivateFn = (
  _route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // SSR safe
  if (typeof window === 'undefined') {
    return true;
  }

  // ✅ Firebase / Admin authenticated
  if (authService.isLoggedIn()) {
    return true;
  }

  // ❌ Not logged in → redirect to login
  localStorage.setItem('redirectAfterLogin', state.url);
  router.navigate(['/login']);
  return false;
};
