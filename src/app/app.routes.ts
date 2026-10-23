import { Routes } from '@angular/router';
import { ListeCours as ListeCoursComponent } from './composants/liste-cours/liste-cours';
import { Accueil } from './pages/accueil/accueil';
import { Connexion } from './pages/connexion/connexion';
import { Introuvable } from './pages/introuvable/introuvable';
import { PageDetail } from './pages/page-detail/page-detail';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Accueil, title: 'Accueil' },
  { path: 'cours', component: ListeCoursComponent, title: 'Catalogue' },
  { path: 'cours/:id', component: PageDetail, title: 'Détail du cours' },
  {
    path: 'mes-inscriptions',
    loadComponent: () =>
      import('./pages/mes-inscriptions/mes-inscriptions').then((m) => m.MesInscriptions),
    canActivate: [authGuard],
    title: 'Mes inscriptions',
  },
  { path: 'connexion', component: Connexion, title: 'Connexion' },
  { path: '**', component: Introuvable, title: 'Page introuvable' },
];
