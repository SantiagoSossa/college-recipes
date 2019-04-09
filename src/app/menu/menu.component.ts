import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  recipes: any;
  ingredients = [];

  constructor(private service: RecipesService) { }

  getRecipes(f){
    this.ingredients.push(f.value.ingredient);

    this.service.get(f.value.ingredient)
      .subscribe(response => {
        this.recipes = response;
        this.recipes = this.recipes.results;
      });
  }

  ngOnInit() {
  }

}
