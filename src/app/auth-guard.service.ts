import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthenticationService,
    private router: Router) { }

  canActivate(route, state: RouterStateSnapshot){
    return this.auth.username$.pipe(
      map(user => {
        if (user) {
          return true;
        }
        this.router.navigate(["/"]);
        return false;
      })
    );
  }
}
