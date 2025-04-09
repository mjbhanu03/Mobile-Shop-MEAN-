import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellOrderTableComponent } from './sell-order-table.component';

describe('SellOrderTableComponent', () => {
  let component: SellOrderTableComponent;
  let fixture: ComponentFixture<SellOrderTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellOrderTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
