import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLockersPageComponent } from './view-lockers-page.component';

describe('ViewLockersPageComponent', () => {
  let component: ViewLockersPageComponent;
  let fixture: ComponentFixture<ViewLockersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewLockersPageComponent]
    });
    fixture = TestBed.createComponent(ViewLockersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
