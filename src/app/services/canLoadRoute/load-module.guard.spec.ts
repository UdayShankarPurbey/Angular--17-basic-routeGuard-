import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loadModuleGuard } from './load-module.guard';

describe('loadModuleGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loadModuleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
