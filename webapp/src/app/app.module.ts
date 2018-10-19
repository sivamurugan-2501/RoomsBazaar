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
import {MatInputModule, MatButtonModule, MatDialogModule, MatCardModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserSignSignupDialog, UserSignSignupComponent } from './user-sign-signup/user-sign-signup.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeSliderListingComponent } from './home-slider-listing/home-slider-listing.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';
import { FilerBoxComponent } from './filer-box/filer-box.component';
import { FormsModule } from '@angular/forms';

import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderWithSearchComponent,  
    MenuComponent,
    SliderWithFilterComponent,
    HomePropertyListingComponent,
    UserSignSignupComponent,
    HomeSliderListingComponent,
    PropertyListingComponent,
    FilerBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    NgbModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UserSignSignupComponent]
})
export class AppModule { }
