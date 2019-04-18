import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { RecipeDto } from './recipe-dto';
import { resolve } from 'url';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavoriteRecipesService {

  recetas=[];
  recetasFiltered = [];

  constructor(private db: AngularFirestore, private auth: AuthenticationService) { }

  save(user: firebase.User, recipe: RecipeDto) {
    this.db.collection('recipes').add({
      user: user.uid,
      title: recipe.title,
      href: recipe.href,
      thumbnail: recipe.thumbnail,
      ingredients: recipe.ingredients
    });
  }

  getRecipes(){
    this.auth.username$.subscribe(user =>{
      this.db.collection('recipes').valueChanges()
      .subscribe((recipes) => {
        this.recetas = recipes;
        this.recetas.filter((reci:RecipeDto) => {
          if(user.uid == reci.user)
          {
            this.recetasFiltered.push(reci);
          }
        });
      });
    });
  }

  getFavoriteRecipes(){
    this.getRecipes();
    return this.recetasFiltered;
  }

  get(): Observable<RecipeDto[]>{
    return this.db.collection('recipes').valueChanges() as Observable<RecipeDto[]>;  
  }
}
