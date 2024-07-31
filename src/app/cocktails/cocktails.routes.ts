import {ActivatedRouteSnapshot, Routes} from '@angular/router';
import {CocktailListComponent} from "./cocktail-list/cocktail-list.component";
import {inject} from "@angular/core";
import {CocktailService} from "./shared/cocktail.service";
import {CocktailDetailsComponent} from "./cocktail-details/cocktail-details.component";

export default [
  {
    path: '',
    component: CocktailListComponent,
    resolve: {
      cocktails: () => inject(CocktailService).getAll()
    }
  },
  {
    path: ':id',
    component: CocktailDetailsComponent,
    resolve: {
      cocktail: (route: ActivatedRouteSnapshot) => inject(CocktailService).getById(route.params['id'])
    }
  }
] satisfies Routes;
