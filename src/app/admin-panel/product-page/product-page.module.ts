import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { NewProdComponent } from './new-prod/new-prod.component';


@NgModule({
  declarations: [NewProdComponent],
  imports: [
    CommonModule,
    ProductPageRoutingModule
  ]
})
export class ProductPageModule { }
