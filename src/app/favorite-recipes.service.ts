import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { RecipeDto } from './recipe-dto';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class FavoriteRecipesService {

  constructor(private db: AngularFirestore) { }

  save(user: firebase.User, recipe: RecipeDto) {
    this.get(); 
    this.db.collection('recipes').add({
      user: user.uid,
      title: recipe.title,
      href: recipe.href,
      thumbnail: recipe.thumbnail,
      ingredients: recipe.ingredients
    });
  }

  get(){
    this.db.collection('/recipes').snapshotChanges()
    .subscribe(recipes => {
    }) 
  
  }
}
