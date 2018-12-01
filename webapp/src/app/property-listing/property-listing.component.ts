import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.css']
})
export class PropertyListingComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  view_property(prop_id){
    this.route.navigate(["property-view"]);
  }

}
