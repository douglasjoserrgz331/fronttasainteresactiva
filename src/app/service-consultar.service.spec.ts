import { TestBed } from '@angular/core/testing';

import { ServiceConsultarService } from './service-consultar.service';

describe('ServiceConsultarService', () => {
  let service: ServiceConsultarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceConsultarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
