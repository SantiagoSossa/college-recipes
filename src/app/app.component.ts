import { Component } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  recipes: any;

  constructor(private service: RecipesService){
  }

  showRecipes(ingredients:HTMLInputElement){
    console.log(ingredients.value);
    if(ingredients.value){
    this.service.apiRequest(ingredients.value)
      .subscribe(response => {
        this.recipes = response;
        console.log(response);
        this.recipes = this.recipes.results;
      });
    }
  }
}
