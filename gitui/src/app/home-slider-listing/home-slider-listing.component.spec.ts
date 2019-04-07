import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSliderListingComponent } from './home-slider-listing.component';

describe('HomeSliderListingComponent', () => {
  let component: HomeSliderListingComponent;
  let fixture: ComponentFixture<HomeSliderListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSliderListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSliderListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
