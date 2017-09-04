import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../shared';
import { ApiService } from '../../../shared';
import { Subject } from 'rxjs/Rx';

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

	dtOptions: DataTables.Settings = {};
	dtData;
	users: User[] = [];
	// We use this trigger because fetching the list of persons can be quite long,
	// thus we ensure the data is fetched before rendering
	dtTrigger: Subject<any> = new Subject();
	constructor(private apiSrv:ApiService) { 

	}

	ngOnInit() {

		this.dtOptions = {
			  "lengthChange": false
		};
		this.apiSrv.getRequest('user/getall',
		{}).subscribe(data => {
			this.users = data.data;
			// Calling the DT trigger to manually render the table
			console.log(this.users);
			this.dtTrigger.next();
		});

		
	}

	private extractData(res: Response) {
		const body = res.json();
		return body || {};
	}
}
