import { TestBed } from '@angular/core/testing';

import { SellerProviderService } from './seller-provider.service';

describe('SellerProviderService', () => {
  let service: SellerProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
