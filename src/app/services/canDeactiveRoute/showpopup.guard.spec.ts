import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { showpopupGuard } from './showpopup.guard';

describe('showpopupGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => showpopupGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
