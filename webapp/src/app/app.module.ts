import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { SliderWithSearchComponent } from './slider-with-search/slider-with-search.component';
import { MenuComponent } from './menu/menu.component';
import { SliderWithFilterComponent } from './slider-with-filter/slider-with-filter.component';
import { HomePropertyListingComponent } from './home-property-listing/home-property-listing.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserSignSignupComponent } from './user-sign-signup/user-sign-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderWithSearchComponent,
    MenuComponent,
    SliderWithFilterComponent,
    HomePropertyListingComponent,
    UserSignSignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
