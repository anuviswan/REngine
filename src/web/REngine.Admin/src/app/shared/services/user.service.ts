import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  private loggedInUser;
  constructor() { 
  	this.isUserLoggedIn = false;
  }

  setUserLoggedin = function(){
  	this.isUserLoggedIn = true;
  }

  getUserLoggedIn = function(){
  	return this.isUserLoggedIn;
  }

}
