import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl,Validators,ReactiveFormsModule  } from "@angular/forms";
import { routerTransition } from '../router.animations';
import { UserService } from '../shared';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    
    frmLogin;
    constructor(public router: Router,
                private userSrv:UserService) {
    }

    ngOnInit() {
        this.frmLogin = new FormGroup({
            username : new FormControl(""),
            password : new FormControl("")
        })
    }

    onSubmit(user) {
        console.log('Submitting Form');
        console.log(user);
        this.userSrv.setUserLoggedin();
        localStorage.setItem('isLoggedin', 'true');
    }

}
