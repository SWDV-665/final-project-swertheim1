import { TestBed } from '@angular/core/testing';

import { AnswerCheckerService } from './answer-checker.service';

describe('AnswerCheckerService', () => {
  let service: AnswerCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
