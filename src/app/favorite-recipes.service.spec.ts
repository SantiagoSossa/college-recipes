import { TestBed } from '@angular/core/testing';

import { FavoriteRecipesService } from './favorite-recipes.service';

describe('FavoriteRecipesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoriteRecipesService = TestBed.get(FavoriteRecipesService);
    expect(service).toBeTruthy();
  });
});
