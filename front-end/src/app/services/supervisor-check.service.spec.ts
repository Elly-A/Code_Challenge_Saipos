import { TestBed } from '@angular/core/testing';

import { SupervisorCheckService } from './supervisor-check.service';

describe('SupervisorCheckService', () => {
  let service: SupervisorCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupervisorCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
