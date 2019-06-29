import { TestBed } from '@angular/core/testing';

import { ListOwnersPetsService } from './list-owners-pets.service';

describe('ListOwnersPetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListOwnersPetsService = TestBed.get(ListOwnersPetsService);
    expect(service).toBeTruthy();
  });
});
