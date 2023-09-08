import { TestBed } from '@angular/core/testing';

import { HistoriquedataService } from './historiquedata.service';

describe('HistoriquedataService', () => {
  let service: HistoriquedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriquedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
