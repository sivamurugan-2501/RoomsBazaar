import { Component, OnInit } from '@angular/core';
import { FilterModel } from './../skeleton/filter-schema';
import { Options } from 'ng5-slider';
import { FILTER_DATA } from './../skeleton/sample-data';

@Component({
  selector: 'app-filer-box',
  templateUrl: './filer-box.component.html',
  styleUrls: ['./filer-box.component.css']
})
export class FilerBoxComponent implements OnInit {

  
  sortOptions:Array<Object>;
  filterData:FilterModel = {  
                              option_sort_data: FILTER_DATA.sortOptions,
                              budget_option_min: FILTER_DATA.budgetOptions_min,
                              budget_option_max: FILTER_DATA.budgetOptions_max,
                              availability_options: [{}],
                              location_list: FILTER_DATA.location_list
                           };
                          
  
  /*
  # Config for using ng5 slider                         
  budgetSliderOptions: Options={
      floor: this.filterData.budget_low_value,
      ceil: this.filterData.budget_high_value,
      ariaLabel: "Lakhs"
  }*/
    

  constructor() { 
    this.sortOptions = FILTER_DATA.sortOptions

  }

  model = {
    left: true,
    middle: false,
    right: false
  };

  ngOnInit() {
  }

}
