import { Component, Input } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  @Input() recipes: any;

  constructor(private service: RecipesService){
  }

  showRecipes(ingredients:HTMLInputElement){
    
  }

}
