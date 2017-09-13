import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl,Validators,ReactiveFormsModule  } from "@angular/forms";
import { routerTransition } from '../router.animations';
import { UserService } from '../shared';
import { ApiService } from '../shared';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface User{
    username:string,
    password:string
}
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    pageTitle = "REngine Admin Panel";
    
    frmLogin;
    constructor(public router: Router,
                private userSrv:UserService,
                private apiService:ApiService
                ) {}

    ngOnInit() {
        this.frmLogin = new FormGroup({
            username : new FormControl("root",[Validators.required]),
            password : new FormControl("jia",[Validators.required])
        })
    }

    onSubmit(user) {
        this.apiService.postRequest('user/validate',
                            {
                                username:user.username,
                                password:user.password
                            }).subscribe(
                            data => {
                                var result = data.data;
                                if(result.IsAuthenticated)
                                {
                                    this.userSrv.setUserLoggedin(result.Username,
                                                                 result.FirstName,
                                                                 result.LastName);
                                    this.router.navigate(["/dashboard"]);

                                }
                                }
                            );
        
        
        localStorage.setItem('isLoggedin', 'true');
    }

}
