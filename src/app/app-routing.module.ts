import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './homepage/landing-page/landing-page.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'collections', loadChildren: () => import('./collections-page/collections-page.module').then(m => m.CollectionsPageModule) },
  { path: 'product-list', loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule) },
  { path: 'product-details', loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsModule) },
  { path: 'contact-us', loadChildren:() => import('./contact-us/contact-us.module').then(m => m.ContactUsModule) },
  { path: 'admin-panel', loadChildren:() => import('./admin-panel/product-page/product-page.module').then(m => m.ProductPageModule ) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
