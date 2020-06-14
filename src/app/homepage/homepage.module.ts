import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
    
  ],
  exports: [
    LandingPageComponent
  ]
})
export class HomepageModule { }
