import { Component, OnInit, NgZone,forwardRef,Injectable, Inject } from '@angular/core';
import { FormGroup, FormControl,Validators,ReactiveFormsModule  } from "@angular/forms";

import { UserService } from '../../../shared';
import { ApiService } from '../../../shared';
import { UserComponent } from '../user.component';

@Component({
	selector: 'app-view-user',
	templateUrl: './view-user.component.html',
	styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

	frmUser;
	usercmp;
	constructor(
		private userSrv:UserService,
		private apiService:ApiService,
		@Inject(forwardRef(() => UserComponent)) private userCmp:UserComponent
		) {		

		let user = new Map<string, any>();
		user.set('username',userCmp.getSelectedUser());

		this.frmUser = new FormGroup({
			username : new FormControl(""),
			firstname : new FormControl(""),
			lastname : new FormControl(""),
			isEnabled : new FormControl(true)
		});


		apiService.getRequest("user/getuser",user)
		.subscribe(
			data=>{
				console.log(data.data.Username);
				this.frmUser = new FormGroup({
					username : new FormControl(data.data.Username),
					firstname : new FormControl(data.data.FirstName),
					lastname : new FormControl(data.data.LastName),
					isEnabled : new FormControl(data.data.IsActive)
				});
			}
			);


		

	}

	ngOnInit() {
	}

}
