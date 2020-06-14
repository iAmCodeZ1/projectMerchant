import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { MaterialModule } from '../material/material.module';

import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    MaterialModule
  ]
})
export class ProductListModule { }
