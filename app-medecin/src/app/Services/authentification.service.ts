import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private readonly validUsername = 'admin';
  private readonly validPassword = 'admin';
  private isAuthenticated = false;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === this.validUsername && password === this.validPassword) {
      this.isAuthenticated = true;
      this.router.navigate(['/home']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}