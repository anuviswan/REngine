import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import { UserService } from '../services';
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,private userSrv:UserService) { }

    canActivate() {
    	if(this.userSrv.getUserLoggedIn())
    		return true;
        /*if (localStorage.getItem('isLoggedin')) {
            return true;
        }*/

        this.router.navigate(['/login']);
        return false;
    }
}
