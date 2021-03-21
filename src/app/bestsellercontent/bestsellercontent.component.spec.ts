import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellercontentComponent } from './bestsellercontent.component';

describe('BestsellercontentComponent', () => {
  let component: BestsellercontentComponent;
  let fixture: ComponentFixture<BestsellercontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestsellercontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestsellercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
