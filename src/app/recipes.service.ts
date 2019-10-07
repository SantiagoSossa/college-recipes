import { HttpClient,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeDto } from './recipe-dto';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private url:string = 'https://cors-anywhere.herokuapp.com/'+environment.API_URL+'/api/?onlyImages=1&i=';

  constructor(private http:HttpClient) {
   }

   get(ingredients:string): Observable<RecipeDto>{
    return this.http.get(this.url+ingredients) as Observable<RecipeDto>;
   }
   
}
