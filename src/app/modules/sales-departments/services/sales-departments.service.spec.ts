import { TestBed } from '@angular/core/testing';

import { SalesDepartmentsService } from './sales-departments.service';

describe('SalesDepartmentsService', () => {
  let service: SalesDepartmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesDepartmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
