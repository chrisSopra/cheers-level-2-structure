import { Routes } from '@angular/router';
import {CocktailListComponent} from "./cocktail-list/cocktail-list.component";

export default [
  {
    path: '',
    component: CocktailListComponent
  }
] satisfies Routes;
