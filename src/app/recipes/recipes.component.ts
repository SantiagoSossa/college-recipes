import { AuthenticationService } from './../authentication.service';
import { FavoriteRecipesService } from './../favorite-recipes.service';
import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceIn } from 'ng-animate';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  animations: [
    trigger('bounceIn', [transition('* => *', useAnimation(bounceIn))])
  ],
})
export class RecipesComponent implements OnInit{

  @Input() recipes: any;
  @Input() favButton: boolean;
  @Input() deleteButton: boolean;
  @Input() userRecipes: boolean;
  favRecipes;
  user;
  bounceIn: any;
  showIngredients = [];

  constructor(
    private recipeFavService: FavoriteRecipesService, 
    private auth: AuthenticationService){
      
    }

  ngOnInit(){
    this.auth.username$.subscribe(user => {
      this.user = (user)?user : "";
      this.isAlreadyFavorite();
    });
  }

  showIngredientList(index){
    return this.showIngredients[index]==true;
  }

  getList(ingredients:string){
    return ingredients.split(",");
  }

  showIng(index){
    this.showIngredients[index]=!this.showIngredients[index];
  }

  save(recipe){
    const isFav = this.isAlreadyFav2(recipe);
      if(this.user && isFav.length==0){
        this.recipeFavService.save(this.user,recipe);
      }
  }

  delete(recipe){
    this.recipeFavService.delete(recipe.id);
  }

  isAlreadyFavorite(){
      if(this.user) {
        this.recipeFavService.getRecipes(this.user.uid).snapshotChanges()
        .subscribe((recipe) => {
          this.favRecipes = recipe.map(key =>{
            const data = key.payload.doc.data();
            const id = key.payload.doc.id;
            return {id,...data};
          });
        });
      }
  }

  isAlreadyFav2(recipe){
    if(this.favRecipes){
      return this.favRecipes.filter(favRecipe =>{
          if(recipe.href == favRecipe.href){
            return true;
          }
      });
    }
  }

  heartColor(recipe){
    return this.isAlreadyFav2(recipe)!=0;
  }

}
