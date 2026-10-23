import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EnTete } from './composants/en-tete/en-tete';
import { PiedPage } from './composants/pied-page/pied-page';
import { Session } from './services/session';

@Component({
  standalone: true,
  imports: [EnTete, RouterOutlet, RouterLink, RouterLinkActive, PiedPage],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  session = inject(Session);
  private router = inject(Router);

  deconnecter() {
    this.session.deconnecter();
    this.router.navigateByUrl('/');
  }
}