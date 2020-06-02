import { TestBed } from '@angular/core/testing';

import { DashBordService } from './dash-bord.service';

describe('DashBordService', () => {
  let service: DashBordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashBordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
