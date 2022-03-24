import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = "https://ds-ecom.azurewebsites.net"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor( private httpClient : HttpClient) { }

  getAllData(): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/products/')
  }

  showlist(name: string): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/products/' + name)
  }
}
