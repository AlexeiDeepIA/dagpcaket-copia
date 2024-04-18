import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLockerComponent } from './details-locker.component';

describe('DetailsLockerComponent', () => {
  let component: DetailsLockerComponent;
  let fixture: ComponentFixture<DetailsLockerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsLockerComponent]
    });
    fixture = TestBed.createComponent(DetailsLockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
