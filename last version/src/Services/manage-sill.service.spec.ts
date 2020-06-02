import { TestBed } from '@angular/core/testing';

import { ManageSillService } from './manage-sill.service';

describe('ManageSillService', () => {
  let service: ManageSillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageSillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
