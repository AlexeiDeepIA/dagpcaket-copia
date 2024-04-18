import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerScreenComponent } from './locker-screen.component';

describe('LockerScreenComponent', () => {
  let component: LockerScreenComponent;
  let fixture: ComponentFixture<LockerScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LockerScreenComponent]
    });
    fixture = TestBed.createComponent(LockerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
