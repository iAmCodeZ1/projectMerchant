import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-prod',
  templateUrl: './new-prod.component.html',
  styleUrls: ['./new-prod.component.css']
})
export class NewProdComponent implements OnInit {

  constructor(
    public productsService: ProductsService
  ) { }

  ngOnInit(): void {
  }

  // Get file from input field and patch to imageSource
    onFileSelected(event: File) {
      this.productForm.patchValue({
        imageSource: event
      });
    }

  onSubmit() {
    // Construct formData from productForm
      const formData = new FormData();

      formData.append('productName', this.productForm.get('productName').value);
      formData.append('srp', this.productForm.get('srp').value);
      formData.append('discountedPrice', this.productForm.get('discountedPrice').value);
      formData.append('desc', this.productForm.get('desc').value);
      formData.append('image', this.productForm.get('imageSource').value);

    this.productsService.createProduct(formData).subscribe(data => {console.log(data)});
  }


  // DEFINE PRODUCT FORM
  productForm = new FormGroup({
    productName: new FormControl('', Validators.required),
    srp: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    discountedPrice: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    desc: new FormControl('', Validators.required),
    image: new FormControl(null, Validators.required),
    imageSource: new FormControl('', Validators.required)
  });

}
