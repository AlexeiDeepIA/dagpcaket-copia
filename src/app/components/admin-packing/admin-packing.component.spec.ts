import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPackingComponent } from './admin-packing.component';

describe('AdminPackingComponent', () => {
  let component: AdminPackingComponent;
  let fixture: ComponentFixture<AdminPackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPackingComponent]
    });
    fixture = TestBed.createComponent(AdminPackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
