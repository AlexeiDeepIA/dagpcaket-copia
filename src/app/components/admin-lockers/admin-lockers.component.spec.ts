import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLockersComponent } from './admin-lockers.component';

describe('AdminLockersComponent', () => {
  let component: AdminLockersComponent;
  let fixture: ComponentFixture<AdminLockersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLockersComponent]
    });
    fixture = TestBed.createComponent(AdminLockersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
