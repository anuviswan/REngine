import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        PageHeaderModule
    ],
    declarations: [UserComponent]
})
export class UserModule { }
