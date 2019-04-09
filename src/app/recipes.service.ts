import { HttpClient,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeDto } from './recipe-dto';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
//https://cors-anywhere.herokuapp.com/
  private url:string = '/api/?onlyImages=1&i=';

  constructor(private http:HttpClient) {
   }

   get(ingredients:string): Observable<RecipeDto>{
     console.log(this.url+ingredients);
    return this.http.get(this.url+ingredients) as Observable<RecipeDto>;
   }
}
