import { TestBed, inject } from '@angular/core/testing';

import { CheckValidFormService } from './check-valid-form.service';

describe('CheckValidFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckValidFormService]
    });
  });

  it('should be created', inject([CheckValidFormService], (service: CheckValidFormService) => {
    expect(service).toBeTruthy();
  }));
});
