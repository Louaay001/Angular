import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Cours, COURS } from '../../donnees/cours';
import { FiltreCoursPipe } from '../../pipes/filtre-cours-pipe';
import { TriCoursPipe } from '../../pipes/tri-cours-pipe';
import { PlacesRestantesPipe } from '../../pipes/places-restantes-pipe';
import { TronquerPipe } from '../../pipes/tronquer-pipe';

@Component({
  standalone: true,
  imports: [FormsModule, RouterLink, FiltreCoursPipe, TriCoursPipe, UpperCasePipe, PlacesRestantesPipe, TronquerPipe],
  selector: 'app-liste-cours',
  styleUrl: './liste-cours.css',
  templateUrl: './liste-cours.html',
})
export class ListeCours {
  recherche = '';
  tri: 'asc' | 'desc' = 'asc';

  cours: Cours[] = COURS;
}
