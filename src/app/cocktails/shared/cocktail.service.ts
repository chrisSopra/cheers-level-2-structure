import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cocktail} from "./cocktail.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>('/cocktails');
  }

  getById(id: string): Observable<Cocktail> {
    return this.http.get<Cocktail>(`/cocktails/${id}`);
  }
}
