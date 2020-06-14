import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsPageRoutingModule } from './collections-page-routing.module';
import { CollectionsComponent } from './collections/collections.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [CollectionsComponent],
  imports: [
    CommonModule,
    CollectionsPageRoutingModule,
    MaterialModule
  ]
})
export class CollectionsPageModule { }
