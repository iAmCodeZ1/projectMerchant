import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { MaterialModule } from '../material/material.module';

import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    MaterialModule
  ]
})
export class ProductDetailsModule { }
