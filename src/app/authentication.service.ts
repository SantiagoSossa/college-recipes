import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from  "@angular/fire/auth";
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './models/app-user';
import { switchMap } from 'rxjs/operators';
import { of } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  username$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, 
    private route: ActivatedRoute, private userService: UserService) { 
      this.username$ = afAuth.authState;
    }

  login(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  get appUser$() : Observable<AppUser> {
    return this.username$
    .pipe(switchMap(user => {
      if(user) return this.userService.get(user.uid);

      return of(null);
    }));
  }

}
