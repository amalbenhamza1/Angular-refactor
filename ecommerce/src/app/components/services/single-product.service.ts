import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn:'root'
})

export class SingleProductService {
productsUrl: string = 'http://localhost:3002/products/1'
  constructor(private http : HttpClient) { }
  httpOptions = {
    headers : new HttpHeaders({
      "Access-Control-Allow-origin":"*",
      "Cross-origin": "cross-site"    })
  }
 
  getData() {
    return this.http.get<any>(this.productsUrl)
  }
}
