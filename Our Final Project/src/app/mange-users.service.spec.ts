import { TestBed } from '@angular/core/testing';

import { MangeUsersService } from './mange-users.service';

describe('MangeUsersService', () => {
  let service: MangeUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangeUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
