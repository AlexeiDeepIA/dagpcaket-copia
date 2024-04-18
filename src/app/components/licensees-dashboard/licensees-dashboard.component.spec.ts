import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseesDashboardComponent } from './licensees-dashboard.component';

describe('LicenseesDashboardComponent', () => {
  let component: LicenseesDashboardComponent;
  let fixture: ComponentFixture<LicenseesDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LicenseesDashboardComponent]
    });
    fixture = TestBed.createComponent(LicenseesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
