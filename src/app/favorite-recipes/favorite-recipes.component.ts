import { RecipeDto } from './../recipe-dto';
import { AuthenticationService } from './../authentication.service';
import { UserService } from './../user.service';
import { FavoriteRecipesService } from './../favorite-recipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-recipes',
  templateUrl: './favorite-recipes.component.html',
  styleUrls: ['./favorite-recipes.component.css']
})
export class FavoriteRecipesComponent implements OnInit {

  uid:string;
  recipes: any;

  constructor(private recipeService: FavoriteRecipesService, private user: UserService,
    private auth: AuthenticationService) { 

    }

    ngOnInit(){
      this.recipes = this.recipeService.getFavoriteRecipes();
    }
  
  getRecipes(){
    this.recipeService.get().subscribe(recipes => recipes); 
  }

  getUser(){
    return this.auth.username$.subscribe(user => this.uid = user.uid);
  }
  

}
