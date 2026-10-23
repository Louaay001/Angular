import { Component, Input } from '@angular/core';
import { Cours } from '../../donnees/cours';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-details-cours',
  styleUrl: './details-cours.css',
  templateUrl: './details-cours.html',
})
export class DetailsCours {
  @Input() cours: Cours | null = null;
}
