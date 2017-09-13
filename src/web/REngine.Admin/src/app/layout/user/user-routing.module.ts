import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user.component';
import { ViewUserComponent } from './view-user/view-user.component';
const routes: Routes = [
{ path: '', component: UserComponent,
children: [ 
{
	path: '',
	component: UserListComponent
},
{
	path: 'userlist',
	component: UserListComponent
},
{
	path: 'viewuser',
	component: ViewUserComponent
}
] 
}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UserRoutingModule { }
