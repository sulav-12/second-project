// app.routes.ts
import { Routes } from '@angular/router';
import { authGuard } from './auth-guard';
import { Login } from './login/login';
import { Register } from './register/register';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Users } from './users/users';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'contact', component: Contact, canActivate: [authGuard] },
  { path: 'home', component: Home, canActivate: [authGuard] },
  { path: 'about', component: About, canActivate: [authGuard] },
  {
    path: 'user',
    component: Users,
    canActivate: [authGuard],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: '**', redirectTo: '/home' },
];
