import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
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
  	return this.httpClient.get(this.baseUrl + controller,param);
  }

}
