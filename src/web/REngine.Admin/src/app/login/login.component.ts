import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl,Validators,ReactiveFormsModule  } from "@angular/forms";
import { routerTransition } from '../router.animations';
import { UserService } from '../shared';
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
                private httpClient:HttpClient
                ) {}

    ngOnInit() {
        this.frmLogin = new FormGroup({
            username : new FormControl("",[Validators.required]),
            password : new FormControl("",[Validators.required])
        })
    }

    onSubmit(user) {
        console.log('Submitting Form');
        console.log(user);

        const req = this.httpClient.post('http://localhost:1246/api/user/validate',{
            username:'foo',
            password:'bar'
        }).subscribe(
            res=>{
                console.log(res);
            },
            error=>{
                console.log("error occured");
            }
        )
        
        this.userSrv.setUserLoggedin();
        localStorage.setItem('isLoggedin', 'true');
    }

}
