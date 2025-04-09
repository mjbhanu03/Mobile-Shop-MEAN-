import { TestBed } from '@angular/core/testing';

import { PurchaseOrderTableService } from './purchase-order-table.service';

describe('PurchaseOrderTableService', () => {
  let service: PurchaseOrderTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseOrderTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
