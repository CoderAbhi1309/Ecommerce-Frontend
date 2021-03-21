import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomencontentComponent } from './womencontent.component';

describe('WomencontentComponent', () => {
  let component: WomencontentComponent;
  let fixture: ComponentFixture<WomencontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomencontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomencontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
