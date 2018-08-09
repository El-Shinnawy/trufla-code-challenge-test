import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpHeaders, HttpResponse, HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';


const backendURL: string = "https://jsonplaceholder.typicode.com/";

const defaultOptions = {
  method: 'GET',
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  url: backendURL,
  responseType: 'json'
};

@Injectable({
  providedIn: 'root'
})
export class XhrService {

  constructor(private http: HttpClient) { }

  public constructUrl(url: string): string {
    return backendURL + url;
  }

  public constRequestOptions(options: any): any {
    const newRequestOptions: any = (<any>Object).assign({});
    
    newRequestOptions.method = options.method ? options.method : defaultOptions.method;
    newRequestOptions.url = backendURL + options.url;
    return newRequestOptions;
  }

  public call(options: any): Observable<any> {
    const finalRequestOptions = this.constRequestOptions(options);
    return this.http.get(finalRequestOptions.url);
  }
}
