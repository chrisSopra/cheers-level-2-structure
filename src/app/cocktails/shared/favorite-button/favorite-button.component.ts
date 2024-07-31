import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-favorite-button',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './favorite-button.component.html',
  styleUrl: './favorite-button.component.scss'
})
export class FavoriteButtonComponent {

  @Input({required: true}) cocktailId: string;

  isFavorite(id: string) {
    return localStorage.getItem(id) === 'true';
  }

  toggleFavorite(id: string) {
    localStorage.setItem(id, String(!this.isFavorite(id)));
  }
}
