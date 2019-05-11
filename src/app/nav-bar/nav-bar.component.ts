import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  appUser: AppUser;
  isCollapsed = true;

  constructor(private auth: AuthenticationService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
   }

  login(){
    this.auth.login();
  }

  logout(){
    this.auth.logout();
  }
  ngOnInit() {
  }

}
