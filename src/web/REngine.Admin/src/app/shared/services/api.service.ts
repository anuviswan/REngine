import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { Response} from '@angular/http';
import { Observable} from 'rxjs/Observable';

@Injectable()



export class ApiService {

	baseUrl = 'http://localhost:1246/api/';
	constructor(private httpClient : HttpClient) { }

	postRequest(controller:string, param:any):Observable<any>{
		return this.httpClient.post(this.baseUrl + controller,param);
		
	}

	getRequest(controller:string,param:any):Observable<any>{

		

		if(param.entries == null)
		{
			return this.httpClient.get(this.baseUrl + controller);
		}
		else{
			let params = new HttpParams();
			for (let entry of Array.from(param.entries())) {
				let key = entry[0];
				let value = entry[1];
				params = params.append(key,value);
			}
			return this.httpClient.get(this.baseUrl + controller,{params:params});
		}
	}

}
