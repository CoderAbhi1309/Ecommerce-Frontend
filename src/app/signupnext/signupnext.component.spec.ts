import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupnextComponent } from './signupnext.component';

describe('SignupnextComponent', () => {
  let component: SignupnextComponent;
  let fixture: ComponentFixture<SignupnextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupnextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupnextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
