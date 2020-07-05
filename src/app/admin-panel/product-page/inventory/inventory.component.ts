import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  products: any;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.reloadProducts();
  }

  // GET ALL PRODUCTS FROM SERVICES
  reloadProducts() {
    this.productsService.getProducts().subscribe(resProducts => {
      this.products = resProducts;
    });
  }

  onDelete(id: String) {
    this.productsService.deleteProduct(id).subscribe(res => {
      console.log(res);
      this.reloadProducts();
    });
  }

}
