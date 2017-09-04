import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../shared';
import { ApiService } from '../../../shared';
import { Subject } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

interface Person {
	ID: number;
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
	persons: Person[] = [];
	// We use this trigger because fetching the list of persons can be quite long,
	// thus we ensure the data is fetched before rendering
	dtTrigger: Subject<any> = new Subject();
	constructor(private apiSrv:ApiService) { 

	}

	ngOnInit() {

		this.dtOptions = {

		};
		this.apiSrv.getRequest('user/getall',
		{}).subscribe(persons => {
			this.persons = persons.data;
			// Calling the DT trigger to manually render the table
			console.log(this.persons);
			this.dtTrigger.next();
		});

		
	}

	private extractData(res: Response) {
		const body = res.json();
		return body || {};
	}
}
