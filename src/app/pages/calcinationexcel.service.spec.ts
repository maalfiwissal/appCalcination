import { TestBed } from '@angular/core/testing';

import { CalcinationexcelService } from './calcinationexcel.service';

describe('CalcinationexcelService', () => {
  let service: CalcinationexcelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcinationexcelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
