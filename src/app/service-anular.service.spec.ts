import { TestBed } from '@angular/core/testing';

import { ServiceAnularService } from './service-anular.service';

describe('ServiceAnularService', () => {
  let service: ServiceAnularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAnularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
