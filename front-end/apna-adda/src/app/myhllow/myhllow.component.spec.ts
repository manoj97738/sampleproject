import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhllowComponent } from './myhllow.component';

describe('MyhllowComponent', () => {
  let component: MyhllowComponent;
  let fixture: ComponentFixture<MyhllowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyhllowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhllowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
