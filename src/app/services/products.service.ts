import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'http://localhost:3000/products-list';
  // url = 'products-list';

  constructor(private http: HttpClient) { }

  // GET ALL PRODUCTS
    getProducts() {
      return this.http.get(this.url);
    }

}
