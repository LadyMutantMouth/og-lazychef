import { TestBed, inject } from '@angular/core/testing';

import { FeaturedUsersService } from './featured-users.service';

describe('FeaturedUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeaturedUsersService]
    });
  });

  it('should be created', inject([FeaturedUsersService], (service: FeaturedUsersService) => {
    expect(service).toBeTruthy();
  }));
});
