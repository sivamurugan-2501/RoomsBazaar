import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { SliderWithFilterComponent } from './slider-with-filter/slider-with-filter.component';
import { HomePropertyListingComponent } from './home-property-listing/home-property-listing.component';
import { HomeSliderListingComponent } from './home-slider-listing/home-slider-listing.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';

const routes: Routes =[
  {
    path: "",
    children:[
      {
        path: 'home',
        component: HomeSliderListingComponent
      },
      {
        path: 'property-listing',
        component: PropertyListingComponent
      }
    ]
  }
  /* ,{
    path: 'modal',
    component: UserSignSignupComponent
  } */
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
