import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsSendedComponent } from './shipments-sended.component';

describe('ShipmentsSendedComponent', () => {
  let component: ShipmentsSendedComponent;
  let fixture: ComponentFixture<ShipmentsSendedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentsSendedComponent]
    });
    fixture = TestBed.createComponent(ShipmentsSendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
