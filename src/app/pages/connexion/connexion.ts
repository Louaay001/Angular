import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Session } from '../../services/session';

@Component({
  imports: [FormsModule],
  selector: 'app-connexion',
  styleUrl: './connexion.css',
  templateUrl: './connexion.html',
})
export class Connexion {
  private session = inject(Session);
  private router = inject(Router);

  @Input() retour = '';
  nom = '';

  seConnecter() {
    this.session.connecter(this.nom);
    this.router.navigateByUrl(this.retour || '/mes-inscriptions');
  }
}
