import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public id: String = this.activatedRoute.snapshot.params['id'];
  public product: any;

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails() {
    this.productsService.getProductDetails(this.id).subscribe(resProduct => this.product = resProduct);
  }

}
