import { TestBed } from '@angular/core/testing';

import { InvoiceProviderService } from './invoice-provider.service';

describe('InvoiceProviderService', () => {
  let service: InvoiceProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
