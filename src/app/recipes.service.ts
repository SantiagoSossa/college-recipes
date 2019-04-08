import { HttpClient,  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
//https://cors-anywhere.herokuapp.com/
  private url:string = '/api/?i=';

  constructor(private http:HttpClient) {
   }

   apiRequest(ingredients:string){
    return this.http.get(this.url+ingredients);
   }
}
