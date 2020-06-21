import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { MaterialModule } from '../material/material.module';

import { ProductListComponent } from './product-list/product-list.component';
import { EllipsisPipe } from './ellipsis.pipe';


@NgModule({
  declarations: [ProductListComponent, EllipsisPipe],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    MaterialModule,
  ]
})
export class ProductListModule { }
