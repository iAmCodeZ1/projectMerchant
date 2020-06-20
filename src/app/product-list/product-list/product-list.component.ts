import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;

  constructor(
    private router: Router,
    private productsService: ProductsService
    ) { }

  ngOnInit() {
    this.reloadProducts();
  }

  // GET ALL PRODUCTS FROM SERVICES
    reloadProducts() {
      this.productsService.getProducts().subscribe(resProducts => {
        this.products = resProducts;
      });
    }

  // NAVIGATE TO PRODUCT DETAILS
    navigateProductDetails() {
      this.router.navigate(['/product-details']);
    }



}
