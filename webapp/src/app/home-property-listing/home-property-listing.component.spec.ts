import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePropertyListingComponent } from './home-property-listing.component';

describe('HomePropertyListingComponent', () => {
  let component: HomePropertyListingComponent;
  let fixture: ComponentFixture<HomePropertyListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePropertyListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePropertyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
