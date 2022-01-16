import { TestBed } from '@angular/core/testing';

import { ForcastsService } from './forcasts.service';

describe('ForcastsService', () => {
  let service: ForcastsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForcastsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
