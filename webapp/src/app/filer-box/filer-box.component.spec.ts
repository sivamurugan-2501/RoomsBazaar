import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilerBoxComponent } from './filer-box.component';

describe('FilerBoxComponent', () => {
  let component: FilerBoxComponent;
  let fixture: ComponentFixture<FilerBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilerBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
