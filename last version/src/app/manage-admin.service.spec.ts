import { TestBed } from '@angular/core/testing';

import { ManageAdminService } from './manage-admin.service';

describe('ManageAdminService', () => {
  let service: ManageAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
