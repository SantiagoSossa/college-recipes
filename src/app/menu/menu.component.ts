import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  recipes: any;
  ingredientsList: string ="";

  constructor(private service: RecipesService) { }

  getRecipes(f){
    console.log(f);
    this.ingredientsList.concat(f.value.ingredient);
    this.service.get(f.value.ingredient)
      .subscribe(response => {
        console.log(response);
        this.recipes = response;
        this.recipes = this.recipes.results;
        console.log(this.ingredientsList);
      });
  }

  ngOnInit() {
  }

}
