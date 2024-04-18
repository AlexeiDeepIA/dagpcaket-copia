import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryQuoteComponent } from './history-quote.component';

describe('HistoryQuoteComponent', () => {
  let component: HistoryQuoteComponent;
  let fixture: ComponentFixture<HistoryQuoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryQuoteComponent]
    });
    fixture = TestBed.createComponent(HistoryQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
