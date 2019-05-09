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
      this.auth.username$.subscribe(user => this.uid = (user)?user.uid : "");
    }

  ngOnInit(){
    if(this.uid){
      this.recipeService.getRecipes(this.uid).snapshotChanges()
      .subscribe((recipe) => {
        this.recipes = recipe.map(key =>{
          const data = key.payload.doc.data();
          const id = key.payload.doc.id;
          return {id,...data};
        });
      });
   }
  }
  
  getRecipes(){
    this.recipeService.get().subscribe(recipes => recipes); 
  }
  
}
