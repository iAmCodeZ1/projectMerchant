import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateCollections() {
    this.router.navigate(['/product-list']);
  }

  toProduct() {
    this.router.navigate(['/product-details']);
  }

}
