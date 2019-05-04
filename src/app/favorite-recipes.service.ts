import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { RecipeDto } from './recipe-dto';

@Injectable({
  providedIn: 'root'
})
export class FavoriteRecipesService {

  recetas=[];
  recetasFiltered = [];
  keys$;

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

  getRecipes(user){
    return this.db.collection('recipes',ref => ref.where('user','==',user));
  }

  delete(recipe){
    this.db.collection('recipes').doc(recipe).delete();
  }

  get(): Observable<RecipeDto[]>{
    return this.db.collection('recipes').valueChanges() as Observable<RecipeDto[]>;  
  }
}
