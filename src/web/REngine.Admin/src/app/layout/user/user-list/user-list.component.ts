import { Component, OnInit, NgZone,forwardRef,Injectable, Inject } from '@angular/core';

import { UserService } from '../../../shared';
import { ApiService } from '../../../shared';
import { Subject } from 'rxjs/Rx';
import { UserComponent } from '../user.component';
import 'rxjs/add/operator/map';

interface User {
	UserName: string;
	FirstName: string;
	LastName: string;
}


@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.scss']
})


export class UserListComponent implements OnInit {

	usercmp;
	dtOptions: any = {};
	selectedUserName = '';
	dtData;
	users: User[] = [];
	// We use this trigger because fetching the list of persons can be quite long,
	// thus we ensure the data is fetched before rendering
	dtTrigger: Subject<any> = new Subject();
	constructor(private apiSrv:ApiService,
		private zone: NgZone,
		@Inject(forwardRef(() => UserComponent)) private user:UserComponent) { 

		this.usercmp = user;		

	}

	ngOnInit() {


		this.dtOptions = {
			select:true,
			"lengthChange": false,
			rowCallback: (row: Node, data: any[] | Object, index: number) => {
				const self = this;
				// Unbind first in order to avoid any duplicate handler
				// (see https://github.com/l-lin/angular-datatables/issues/87)
				$('td', row).unbind('click');
				$('td', row).bind('click', () => {
					self.rowClickHandler(data);
				});
				return row;
			}
		};
		this.apiSrv.getRequest('user/getall',
			{}).subscribe(data => {
				this.users = data.data;
				// Calling the DT trigger to manually render the table
				this.dtTrigger.next();
			});

			
		}

		private extractData(res: Response) {
			const body = res.json();
			return body || {};
		}

		rowClickHandler(info: any): void {
			this.selectedUserName = info[0];
			this.usercmp.setSelectedUser(this.selectedUserName);
		}
	}
