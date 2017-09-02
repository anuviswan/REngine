import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private httpClient : HttpClient) { }

  postRequest(controller:string, param:any){
  	this.httpClient.post('http://localhost:1246/api/'+ controller,param).subscribe(
  		data=> {
  			console.log(data);
  		},
  		error =>{
  			console.log("error:" + error);
  		}
  		)
  }

}
