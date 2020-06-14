import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  navigateCollections() {
    this.router.navigate(['/product-list']);
  }

}
