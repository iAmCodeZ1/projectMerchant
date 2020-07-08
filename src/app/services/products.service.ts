import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // url = 'http://localhost:3000/products-list';
  url = 'products-list';

  constructor(
    private http: HttpClient,
    ) { }

  // GET ALL PRODUCTS
    getProducts() {
      return this.http.get(this.url);
    }

  // GET PRODUCT DETAILS
    getProductDetails(id: String) {
      return this.http.get(this.url + '/' + id);
    }

  // POST NEW PRODUCT
    createProduct(product: Product) {
      return this.http.post(this.url, product);
    }

  // DELETE PRODUCT BY ID
    deleteProduct(id: String) {
      return this.http.delete<void>(this.url + '/' + id);
    }

  // GET DISCOUNT PERCENTAGE
    getDiscountPerc(srp: number, dp: number) {
      let percentage = ((srp - dp)/dp)*100;
      return Math.round(percentage);
    }
}
