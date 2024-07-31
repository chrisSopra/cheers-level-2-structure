import {Component, Input} from '@angular/core';
import {Cocktail} from "../../shared/cocktail.model";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {PipeSeparatedValuesPipe} from "../../../shared/pipe-separated-values.pipe";
import {BoolChipDirective} from "../../../shared/bool-chip.directive";
import {FavoriteButtonComponent} from "../../shared/favorite-button/favorite-button.component";
import {AlcoholicTagComponent} from "../../shared/alcoholic-tag/alcoholic-tag.component";

@Component({
  selector: 'app-cocktail-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    PipeSeparatedValuesPipe,
    BoolChipDirective,
    NgClass,
    FavoriteButtonComponent,
    AlcoholicTagComponent
  ],
  templateUrl: './cocktail-card.component.html',
  styleUrl: './cocktail-card.component.scss'
})
export class CocktailCardComponent {
  @Input() cocktail: Cocktail;

  isFavorite(id: string) {
    return localStorage.getItem(id) === 'true';
  }

  toggleFavorite(id: string) {
    localStorage.setItem(id, String(!this.isFavorite(id)));
  }
}
