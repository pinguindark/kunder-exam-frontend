import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private  QueryHttpOptions = {
		headers: new HttpHeaders(
			{
				// 'Content-Type': 'application/json',
				// 'cache-control' : 'no-cache',
				// 'Access-Control-Allow-Headers' : 'Content-Type' ,
				// 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS' ,
				// 'Access-Control-Allow-Origin' : '*',

      })
  }
      
  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    const url: string = `https://hack.kunderlabs.com/exam/telecom/api/products/new`;
    return this.http.get(url, this.QueryHttpOptions);
  }
}
