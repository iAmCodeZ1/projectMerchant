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
  isSpinnerActive = true;

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
        this.isSpinnerActive = false;
        this.products = resProducts;
      });
    }

  // NAVIGATE TO PRODUCT DETAILS
    navigateProductDetails(event, id) {
      this.router.navigate(['/product-list' + '/' + id]);
    }
}
