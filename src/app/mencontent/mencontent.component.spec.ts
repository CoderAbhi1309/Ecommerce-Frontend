import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MencontentComponent } from './mencontent.component';

describe('MencontentComponent', () => {
  let component: MencontentComponent;
  let fixture: ComponentFixture<MencontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MencontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MencontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
