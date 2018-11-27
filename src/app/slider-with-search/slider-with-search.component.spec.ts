import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderWithSearchComponent } from './slider-with-search.component';

describe('SliderWithSearchComponent', () => {
  let component: SliderWithSearchComponent;
  let fixture: ComponentFixture<SliderWithSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderWithSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderWithSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
