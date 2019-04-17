import { AuthenticationService } from './../authentication.service';
import { UserService } from './../user.service';
import { FavoriteRecipesService } from './../favorite-recipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-recipes',
  templateUrl: './favorite-recipes.component.html',
  styleUrls: ['./favorite-recipes.component.css']
})
export class FavoriteRecipesComponent  {


  constructor(private recipeService: FavoriteRecipesService, private user: UserService,
    private auth: AuthenticationService) { }

  
  getAll(){
    this.recipeService.get().subscribe(recipes => {
      console.log("- ",recipes);
    }); 
  }

  getUser(){
    this.auth.username$.subscribe(user => user.uid);
  }
  

}
