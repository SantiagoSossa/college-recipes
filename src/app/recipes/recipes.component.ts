import { AuthenticationService } from './../authentication.service';
import { FavoriteRecipesService } from './../favorite-recipes.service';
import { Component, Input } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  @Input() recipes: any;
  @Input() favButton: boolean;

  constructor(private service: RecipesService, 
    private recipeFavService: FavoriteRecipesService, 
    private auth: AuthenticationService){}

  save(recipe){
    this.auth.username$.subscribe(user => {
      if(user) {
        this.recipeFavService.save(user,recipe);
      }
    });
  }


}
