import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [routerTransition()]
})
export class UserComponent implements OnInit {

  selectedUser;
  constructor()  {}

  ngOnInit() {
  }

  setSelectedUser(user){
  	
  	this.selectedUser = user;
  }

  getSelectedUser(){
  	
  	return this.selectedUser;
  }

}
