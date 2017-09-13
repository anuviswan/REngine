import { Injectable } from '@angular/core';

@Injectable()

export class UserService {

  private isUserLoggedIn;
  private username;
  private firstName;
  private lastName;
  
  constructor() { 
  	this.isUserLoggedIn = true;
  }

  setUserLoggedin = function(username:String,fname:string,lname:string){
    this.username= username;
    this.firstName = fname;
    this.lastName = lname;
    this.isUserLoggedIn = true;
  }

  isUserAuthenticated = function(){
  	return this.isUserLoggedIn;
  }

  getLoggedInUserName = function(){
    return this.firstName + ' ' + this.lastName;
  }


}
