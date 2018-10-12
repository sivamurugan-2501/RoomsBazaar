import { Component, OnInit } from '@angular/core';
import { FilterModel } from './../skeletion/filter-schema';

@Component({
  selector: 'app-filer-box',
  templateUrl: './filer-box.component.html',
  styleUrls: ['./filer-box.component.css']
})
export class FilerBoxComponent implements OnInit {

  
  sortOptions:Array<Object>;
  filterData:FilterModel = {option_sort_data: this.sortOptions};
  

  constructor() { 
    this.sortOptions = [
      { label: 'Latest', value: 1},
      { label: 'Low Price', value: 2},
      { label: 'High Price', value: 3}
    ];
  }

  model = {
    left: true,
    middle: false,
    right: false
  };

  ngOnInit() {
  }

}
