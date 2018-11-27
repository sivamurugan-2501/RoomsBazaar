import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignSignupComponent } from './user-sign-signup.component';

describe('UserSignSignupComponent', () => {
  let component: UserSignSignupComponent;
  let fixture: ComponentFixture<UserSignSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSignSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSignSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
