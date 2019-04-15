import { FavoriteRecipesService } from './favorite-recipes.service';
import { AuthenticationService } from './authentication.service';
import { RecipesComponent } from './recipes/recipes.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RecipesService } from './recipes.service';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { FavoriteRecipesComponent } from './favorite-recipes/favorite-recipes.component';

const routes: Routes =[
  {path: '', component: MenuComponent},
  {path: 'my-recipes', component: FavoriteRecipesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RecipesComponent,
    MenuComponent,
    LoginComponent,
    FavoriteRecipesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    RecipesService,
    AuthenticationService,
    UserService,
    FavoriteRecipesService,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
