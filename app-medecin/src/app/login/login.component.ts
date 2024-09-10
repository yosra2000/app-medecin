import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {  // Injectez Router
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      
      // Simulez une validation de connexion (remplacez par une vraie logique)
      if (username === 'admin' && password === 'admin') {
        // Redirigez vers la page des patients après une connexion réussie
        this.router.navigate(['/patients']);
      } else {
        this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect';
      }
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs';
    }
  }
}