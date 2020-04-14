import { TestBed } from '@angular/core/testing';

import { BlogRouteGuardService } from './blog-route-guard.service';

describe('BlogRouteGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogRouteGuardService = TestBed.get(BlogRouteGuardService);
    expect(service).toBeTruthy();
  });
});
