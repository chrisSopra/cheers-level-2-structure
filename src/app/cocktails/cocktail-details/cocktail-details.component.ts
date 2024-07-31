import {Component, Input } from '@angular/core';
import {Cocktail} from "../shared/cocktail.model";
import {FavoriteButtonComponent} from "../shared/favorite-button/favorite-button.component";
import {AlcoholicTagComponent} from "../shared/alcoholic-tag/alcoholic-tag.component";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-cocktail-details',
  standalone: true,
  imports: [
    CommonModule,
    FavoriteButtonComponent,
    AlcoholicTagComponent,
    RouterLink
  ],
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss'
})
export class CocktailDetailsComponent {
  @Input() cocktail: Cocktail;
}
