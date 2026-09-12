import { TestBed } from '@angular/core/testing';

import { Tea } from './tea';

describe('Tea', () => {
  let service: Tea;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tea);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
