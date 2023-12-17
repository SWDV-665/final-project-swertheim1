import { TestBed } from '@angular/core/testing';

import { ImageModalServiceService } from './image-modal-service.service';

describe('ImageModalServiceService', () => {
  let service: ImageModalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageModalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
