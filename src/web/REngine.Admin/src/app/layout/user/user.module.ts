import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule} from 'angular-datatables';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { PageHeaderModule } from './../../shared';
import { UserListComponent } from './user-list/user-list.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        DataTablesModule,
        ReactiveFormsModule,
        PageHeaderModule
    ],
    declarations: [UserComponent, UserListComponent, ViewUserComponent]
})
export class UserModule {

 }
