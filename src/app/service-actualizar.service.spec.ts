import { TestBed } from '@angular/core/testing';

import { ServiceActualizarService } from './service-actualizar.service';

describe('ServiceActualizarService', () => {
  let service: ServiceActualizarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceActualizarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
