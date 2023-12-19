import { TestBed } from '@angular/core/testing';

import { ServiceIncluirService } from './service-incluir.service';

describe('ServiceIncluirService', () => {
  let service: ServiceIncluirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceIncluirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
