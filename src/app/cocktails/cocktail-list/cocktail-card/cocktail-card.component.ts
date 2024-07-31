import {Component, Input} from '@angular/core';
import {Cocktail} from "../../shared/cocktail.model";
import {NgOptimizedImage} from "@angular/common";
import {PipeSeparatedValuesPipe} from "../../../shared/pipe-separated-values.pipe";
import {BoolChipDirective} from "../../../shared/bool-chip.directive";

@Component({
  selector: 'app-cocktail-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    PipeSeparatedValuesPipe,
    BoolChipDirective
  ],
  templateUrl: './cocktail-card.component.html',
  styleUrl: './cocktail-card.component.scss'
})
export class CocktailCardComponent {
  @Input() cocktail: Cocktail;
}
