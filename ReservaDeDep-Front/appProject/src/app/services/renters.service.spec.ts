import { TestBed } from '@angular/core/testing';

import { RentersService } from './renters.service';

describe('RentersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RentersService = TestBed.get(RentersService);
    expect(service).toBeTruthy();
  });
});
