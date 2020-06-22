import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProdComponent } from './new-prod/new-prod.component';


const routes: Routes = [
  { 
    path: '', component: NewProdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductPageRoutingModule { }
