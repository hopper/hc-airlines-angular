import { TestBed } from '@angular/core/testing';

import { HopperLibService } from './hopper-events.service';

describe('HopperLibService', () => {
  let service: HopperLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HopperLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
