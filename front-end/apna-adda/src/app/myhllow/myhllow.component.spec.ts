import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhelloComponent } from './myhllow.component';

describe('MyhelloComponent', () => {
  let component: MyhelloComponent;
  let fixture: ComponentFixture<MyhelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyhelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
