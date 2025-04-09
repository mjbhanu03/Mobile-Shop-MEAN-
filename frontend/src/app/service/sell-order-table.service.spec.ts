import { TestBed } from '@angular/core/testing';

import { SellOrderTableService } from './sell-order-table.service';

describe('SellOrderTableService', () => {
  let service: SellOrderTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellOrderTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
