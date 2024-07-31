import { Routes } from '@angular/router';
import {CocktailListComponent} from "./cocktail-list/cocktail-list.component";
import {inject} from "@angular/core";
import {CocktailService} from "./shared/cocktail.service";

export default [
  {
    path: '',
    component: CocktailListComponent,
    resolve: {
      cocktails: () => inject(CocktailService).getAll()
    }
  }
] satisfies Routes;
