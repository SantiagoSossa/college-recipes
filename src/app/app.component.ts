import { AuthenticationService } from './authentication.service';
import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService: UserService, private auth: AuthenticationService, router: Router){
    auth.username$.subscribe(user => {
      if(user) {
        console.log("the user", user);
        userService.get(user.uid)
        .subscribe(appUser =>{
          console.log("el user ",appUser);
        });
        userService.save(user);

        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }
  
}
