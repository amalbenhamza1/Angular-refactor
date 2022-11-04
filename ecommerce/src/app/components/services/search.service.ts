import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
productsUrl =  'http://localhost:3002/products/getAll'

  constructor(private http : HttpClient,
    private router: Router ) { }
  httpOptions = {
    headers : new HttpHeaders({
      "Access-Control-Allow-origin":"*",
      "Cross-origin": "cross-site"    })
  }
  getAll() {
    return this.http.get<any>(this.productsUrl)
  }
  

}
