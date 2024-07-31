import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {Cocktail} from "../shared/cocktail.model";
import {CocktailCardComponent} from "./cocktail-card/cocktail-card.component";
import {CommonModule} from "@angular/common";
import {FiltersComponent} from "./filters/filters.component";
import {debounceTime, distinctUntilChanged, from, map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [
    CocktailCardComponent,
    CommonModule,
    FiltersComponent
  ],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent implements AfterViewInit {
  @Input() cocktails: Cocktail[];

  @ViewChild(FiltersComponent) filters: FiltersComponent;

  filteredCocktails: Observable<Cocktail[]>;

  ngAfterViewInit() {
    this.filteredCocktails = from(this.filters.filterTerm)
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map((filter) => this.cocktails.filter(cocktail => cocktail.name.toLowerCase().startsWith(filter.trim().toLowerCase()))),
        startWith(this.cocktails)
      )
  }
}
