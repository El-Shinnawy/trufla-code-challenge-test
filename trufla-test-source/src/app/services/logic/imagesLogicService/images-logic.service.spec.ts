import { TestBed, inject } from '@angular/core/testing';

import { ImagesLogicService } from './images-logic.service';

describe('PhotosLogicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImagesLogicService]
    });
  });

  it('should be created', inject([ImagesLogicService], (service: ImagesLogicService) => {
    expect(service).toBeTruthy();
  }));
});
