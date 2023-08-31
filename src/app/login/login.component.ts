import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
   if (this.username === 'utilisateur' && this.password === 'motdepasse') {
      // Les informations de connexion sont valides
      console.log('Connexion réussie ! Redirection vers la page de course...');
      this.router.navigate(['/course']); // Redirige vers la page de course
    } else {
      console.log('Échec de la connexion. Veuillez vérifier vos informations.');
    }
  }
}