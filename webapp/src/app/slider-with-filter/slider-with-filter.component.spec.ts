import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderWithFilterComponent } from './slider-with-filter.component';

describe('SliderWithFilterComponent', () => {
  let component: SliderWithFilterComponent;
  let fixture: ComponentFixture<SliderWithFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderWithFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderWithFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
