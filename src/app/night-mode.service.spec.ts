/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NightModeService } from './night-mode.service';

describe('Service: NightMode', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NightModeService]
    });
  });

  it('should ...', inject([NightModeService], (service: NightModeService) => {
    expect(service).toBeTruthy();
  }));
});
